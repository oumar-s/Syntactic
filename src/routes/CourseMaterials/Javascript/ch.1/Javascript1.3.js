import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { auth, db } from '../../../../config/firebaseConfig'; 
import { getDocs,
	collection,
	addDoc,
    arrayUnion,
    updateDoc,
	doc,
    Firestore
 } from 'firebase/firestore';

import { NavLink } from 'react-router-dom'; // Import NavLink

import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';

import { OpenAI } from "openai";
const openai = new OpenAI({ 
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const Examination = () => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');    
    
    const practice = `Write an if statement to check if a number is even or odd. Declare a variable called number and assign it any integer value. Write an if statement that checks whether the number is even or odd. Use console.log() to display a message indicating whether the number is even or odd.`

    function handleEditorChange(value, event) {
        console.log('here is the current model value:', value);
        setCode(value)
    }

    const handleRun = async () => {
        setOutput('Loading...');
        const response = await openai.chat.completions.create({
            messages: [{ role: "assistant", content: `Evaluate the javascript code bellow and return only the output. If there a syntax error, return "Syntax error." If there is no valid output, return nothing, If there is no valid output, return nothing. The code is: ${code}` }],
            model: "gpt-3.5-turbo",
            max_tokens: 100
        });  
        setOutput(response.choices[0].message.content);
    };
    const handleSubmit = async () => {
        const response = await openai.chat.completions.create({
                messages: [{ role: "assistant", content: `The code bellow is an attempt to solve the given practice problem bellow. Based on this attempt determine if the code correctly solve the practice problem. The output should look like this: First state if the code is "Correct" or "Incorrect". Then give "a constructive feedback that a beginner will find useful based on code quality and clean code. if there is no constructive feedback return 'no feedback'. code is ${code}, practice problem is ${practice}` }],
                model: "gpt-3.5-turbo",
                max_tokens: 100});
            
        const feedback = response.choices[0].message.content;
        setOutput(feedback);

        //Add feedback to Firebase
        const currentUser = auth.currentUser;    
        if (currentUser) {
            try {
                const userFeedbackDocRef = await doc(db, `/course_feedbacks/${currentUser.uid}`);
                if(userFeedbackDocRef){
                    updateDoc(userFeedbackDocRef, {
                        feedbacks: arrayUnion({feedback: feedback, course: 'Javascript'}) 
                    });
                }
                //setEnrolledCourses(enrolledCoursesData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        
        };
      };


    return (
        <div className='bg-midnight pt-5 pb-5'>
            <div className='flex justify-center space-x-8 p-5 m-5'>
                    <NavLink to='/javascript/1.2'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    </NavLink>
                    <NavLink to='/javascript/2.0'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                    </NavLink>
            </div>
            <div className='flex flex-wrap md:flex-nowrap  font-ubuntu bg-midnight text-white'>
                <div className='w-1/2 h-screen overflow-auto pl-5 pr-5'>
                    <h1 className='text-2xl md:text-4xl font-bold my-4'>        
                        Chapter 1 Exam
                    </h1>
                    <p className='font-mono my-2'>
                        Answer each of the practive questions bellow to the best of your ability. Your performance here will be used to build your specialized review list.
                    </p>

                    <p className='font-mono my-2'>
                        Conditional statements are like the traffic signals of your program, guiding the flow of execution based on certain conditions. We'll cover:
                        if Statements: Learn how to use if statements to execute a block of code if a specified condition is true.
                        else Statements: Explore else statements, which allow you to provide an alternative code block to execute if the condition in the if statement is false.
                    </p>

                    <button className=''>
                       Generate Additional Practice Problems
                    </button>

                    
                </div>

                <div className='w-1/2'>
                    <div className="editor-container border-t-4  border-l-4 border-r-4 border-solid border-slate-800">
                        <Editor
                            height="60vh"
                            language="javascript"
                            theme="vs-dark"
                            onChange={handleEditorChange}
                        />
                    </div>

                    <div className='buttons-and-info-div flex space-x-2 justify-center bg-slate-900'>
                        <button className=" hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center" onClick={handleRun}>
                            Run
                        </button>

                        <button className=" hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>

                    <div className='bg-black h-64 p-2'>
                        <pre>{output}</pre>
                    </div>
                    
                </div>
            </div>
            <div className='flex justify-center space-x-8 p-5 m-5'>
                    <NavLink to='/javascript/1.1'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    </NavLink>
                    <NavLink to='/javascript/1.3'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                    </NavLink>
            </div>
        </div>
    );
};

export default Examination;

