import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { auth, db } from '../../../../config/firebaseConfig';
import {
    getDoc,
    collection,
    setDoc,
    arrayUnion,
    updateDoc,
    doc,
    Firestore
} from 'firebase/firestore';

import { Link } from 'react-router-dom'; // Import NavLink

import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

import Chapter1 from './PracticeAndExamples';

import { OpenAI } from "openai";
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const PythonExamination1 = () => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [selectedTab, setSelectedTab] = useState(1);
    const [practice, setPractice] = useState(Chapter1.exam[1]); 

    const handleTabClick = (tabNumber) => {
        console.log('practice', practice);
        setSelectedTab(tabNumber);
        setPractice(Chapter1.exam[tabNumber]);
    };


    function handleEditorChange(value, event) {
        console.log('here is the current model value:', value);
        setCode(value)
    }

    const handleRun = async () => {
        setOutput('Loading...');
        const response = await openai.chat.completions.create({
            messages: [{ role: "assistant", content: `Evaluate the python code below and return only the output. If there a syntax error, return "Syntax error." If there is no valid output, return nothing, If there is no valid output, return nothing. The code is: ${code}` }],
            model: "gpt-3.5-turbo",
            max_tokens: 100
        });
        setOutput(response.choices[0].message.content);
    };
    const handleSubmit = async () => {
        setOutput('Loading...');
        const response = await openai.chat.completions.create({
            messages: [{ role: "assistant", content: `The code below is an attempt to solve the given practice problem below. Based on this attempt determine if the code correctly solve the practice problem. The output should look like this: First state if the code is "Correct" or "Incorrect". Then give "a constructive feedback that a beginner will find useful based on code quality and clean code. if there is no constructive feedback return 'no feedback'. code is ${code}, practice problem is ${practice}` }],
            model: "gpt-3.5-turbo",
            max_tokens: 100
        });

        const feedback = response.choices[0].message.content;
        setOutput(feedback);

        //Add feedback to Firebase
        const currentUser = auth.currentUser;
        if (currentUser) {
            const docRef = doc(db, 'course_feedbacks', `${currentUser.uid}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                updateDoc(docRef, {
                    feedbacks: arrayUnion({ feedback: feedback, course: 'Python' })
                });
            } else {
                // Add a new document in collection "cities"
                await setDoc(docRef, {
                    feedbacks: [{course: 'Python', feedback: feedback}]
                });
            }

        };
    };


    return (
        <div className='bg-midnight pt-1'>
            <div className='flex justify-center space-x-8 p-5 m-5'>
                <Link to='/python/1.1'>
                    <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                </Link>
                <Link to='/python/2.0'>
                    <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                </Link>
            </div>
            <div className='flex flex-wrap md:flex-nowrap  font-ubuntu bg-midnight text-white'>
                <div className='w-1/2 h-fit overflow-auto pl-5 pr-5'>
                    <h1 className='text-2xl md:text-4xl font-bold bg-slate-700 p-4'>
                        Chapter 1 Exam
                    </h1>
                    <p className='font-mono my-8'>
                        Answer each of the practice questions below to the best of your ability. Your performance here will be used to build your specialized review list.
                    </p>

                    <p className='font-mono my-8'>
                        In this section, we'll explore some simple printing practice problems in Python. These exercises will help you become more comfortable with using the print function for different types of output.
                    </p>

                    <div className="w-fit p-8">
                        <nav className="bg-slate-900">
                            <ul className="flex space-x-4">
                                <li
                                    className={`cursor-pointer p-4 ${selectedTab === 1 ? 'bg-gray-600' : ''}`}
                                    onClick={() => handleTabClick(1)}
                                >
                                    Practice 1
                                </li>
                                <li
                                    className={`cursor-pointer p-4 ${selectedTab === 2 ? 'bg-gray-600' : ''}`}
                                    onClick={() => handleTabClick(2)}
                                >
                                    Practice 2
                                </li>
                                <li
                                    className={`cursor-pointer p-4 ${selectedTab === 3 ? 'bg-gray-600' : ''}`}
                                    onClick={() => handleTabClick(3)}
                                >
                                    Practice 3
                                </li>
                                <li
                                    className={`cursor-pointer p-4 ${selectedTab === 4 ? 'bg-gray-600' : ''}`}
                                    onClick={() => handleTabClick(4)}
                                >
                                    Practice 4
                                </li>
                                <li
                                    className={`cursor-pointer p-4 ${selectedTab === 5 ? 'bg-gray-600' : ''}`}
                                    onClick={() => handleTabClick(5)}
                                >
                                    Practice 5
                                </li>
                            </ul>
                        </nav>
                        <div className=" p-4 mt-4">
                            {selectedTab === 1 && 
                            <p className='font-mono my-2'>
                                {practice}
                            </p>}

                            {selectedTab === 2 && 
                            <p className='font-mono my-2'>
                                {practice}
                            </p>}

                            {selectedTab === 3 && 
                            <p className='font-mono my-2'>
                                {practice}
                            </p>}

                            {selectedTab === 4 && 
                            <p className='font-mono my-2'>
                                {practice}
                            </p>}

                            {selectedTab === 5 && 
                            <p className='font-mono my-2'>
                                {practice}
                            </p>}
                        </div>
                    </div>
                    
                    <div className='buttons-and-info-div flex space-x-2 justify-center pt-30 pb-16 mt-16'>
                        <button className='hover:bg-gray-600 p-4 text-white font-semibold bg-slate-900'>
                            More Practice Problems
                        </button>
                    </div>



                </div>

                <div className='w-1/2'>
                    <div className="editor-container border-t-4  border-l-4 border-r-4 border-solid border-slate-800">
                        <Editor
                            height="58vh"
                            language="python"
                            theme="vs-dark"
                            onChange={handleEditorChange}
                        />
                    </div>

                    <div className='buttons-and-info-div flex space-x-2 justify-center bg-slate-900 '>
                        <button className=" hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center" onClick={handleRun}>
                            Run
                        </button>

                        <button className=" hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>

                    <div className='bg-black h-52 p-2 border-2 border-solid border-slate-800'>
                        <pre className='whitespace-pre-line'>{output}</pre>
                    </div>

                </div>
            </div>
            <Chatbot /> 
            {/* <div className='flex justify-center space-x-8 p-5 m-5'>
                <Link to='/javascript/1.1'>
                    <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                </Link>
                <Link to='/javascript/1.3'>
                    <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                </Link>
            </div> */}
        </div>
    );
}

export default PythonExamination1;