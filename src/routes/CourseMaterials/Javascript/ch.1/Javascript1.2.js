import React, { useState} from 'react';
import Editor from '@monaco-editor/react';
import { Link } from 'react-router-dom'; // Import NavLink
import { auth, db } from '../../../../config/firebaseConfig'; 
import { getDoc,
	collection,
	setDoc,
    arrayUnion,
    increment,
    updateDoc,
	doc,
    Firestore
 } from 'firebase/firestore';

import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';


//Chapter 1 contains the code examples and practice problems for the chapter
import Chapter1 from './PracticeAndExamples';

import { OpenAI } from "openai";
const openai = new OpenAI({ 
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});



const DataTypesAndVariables = () => {
    const [code1, setCode1] = useState("");
    const [code2, setCode2] = useState("");
    const [code3, setCode3] = useState("");

    const [output1, setOutput1] = useState('');
    const [output2, setOutput2] = useState('');
    const [output3, setOutput3] = useState('');

    const [feedback1, setFeedback1] = useState('');
    const [feedback2, setFeedback2] = useState('');
    const [feedback3, setFeedback3] = useState('');

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    const [performance, setPerformance] = useState({p1: false, p2: false, p3: false});

    
    function handleEditorChange1(value) {
        console.log('here is the current model value:', value);
        setCode1(value)
    }
    function handleEditorChange2(value) {
        console.log('here is the current model value:', value);
        setCode2(value)
    }
    function handleEditorChange3(value) {
        console.log('here is the current model value:', value);
        setCode3(value)
    }

    const handleRun1 = async () => {
        setToggle1(true);
        setOutput1('Loading...');
        const response = await openai.chat.completions.create({
            messages: [{ role: "assistant", content: `Evaluate the javascript code bellow and return only the output. If there a syntax error, return "Syntax error." If there is no valid output, return nothing, If there is no valid output, return nothing. ${code1}` }],
            model: "gpt-3.5-turbo",
            max_tokens: 100
        });  
        setOutput1(response.choices[0].message.content);
    }
    const handleRun2 = async () => {
        setToggle2(true);
        setOutput2('Loading...');
        const response = await openai.chat.completions.create({
            messages: [{ role: "assistant", content: `Evaluate the javascript code bellow and return only the output. If there a syntax error, return "Syntax error." If there is no valid output, return nothing, If there is no valid output, return nothing. ${code2}` }],
            model: "gpt-3.5-turbo",
            max_tokens: 100
        });  
        setOutput2(response.choices[0].message.content);
    }
    const handleRun3 = async () => {
        setToggle3(true);
        setOutput3('Loading...');
        const response = await openai.chat.completions.create({
            messages: [{ role: "assistant", content: `Evaluate the javascript code bellow and return only the output. If there a syntax error, return "Syntax error." If there is no valid output, return nothing, If there is no valid output, return nothing. ${code3}` }],
            model: "gpt-3.5-turbo",
            max_tokens: 100
        });  
        setOutput3(response.choices[0].message.content);
    }

    const handleSubmit1 = async () => {
        setToggle1(true);
        setFeedback1('Loading...');
        const response = await openai.chat.completions.create({
            messages: [{ role: "assistant", content: `The code bellow is an attempt to solve the given practice problem bellow. Based on this attempt determine if the code correctly solve the practice problem. The output should look like this: First state if the code is "Correct" or "Incorrect". Then give "a constructive feedback that a beginner will find useful based on common coding standards and clean code. if there is no constructive feedback return 'no feedback'. code is ${code1}, practice problem is ${Chapter1.topic2.practice1}` }],
            model: "gpt-3.5-turbo",
            max_tokens: 100
        });  
        
        const feedback = response.choices[0].message.content;
        setFeedback1(feedback);

        //Add feedback to Firebase
        const currentUser = auth.currentUser;    
        if (currentUser) {
            const docRef = doc(db, 'course_feedbacks', `${currentUser.uid}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                updateDoc(docRef, {
                    feedbacks: arrayUnion({ feedback: feedback, course: 'Javascript' })
                });
            } else {
                // Add a new document in collection "cities"
                await setDoc(docRef, {
                    feedbacks: [{course: 'Javascript', feedback: feedback}]
                });
            }

            //make feedback lowwer case
            const lowerCaseFeedback = feedback.toLowerCase();
            //check if feedback contains the the string 'correct'
            if (lowerCaseFeedback.includes('correct')) {
                const progressRef = doc(db, 'progress', `${currentUser.uid}`);
                const data = docSnap.data();
                setPerformance(prevPerformance => {
                    const updatedPerformance = {...prevPerformance, p1: true};

                    //check if all performance is true
                    if (updatedPerformance.p1 && updatedPerformance.p2 && updatedPerformance.p3) {
                        //update progress
                        updateDoc(progressRef, {
                            "Javascript.1:1" : "complete",
                            "Javascript.percent" : increment(2.4)
                        });   
                    }             
                    return updatedPerformance;
                });

                if(data.Javascript['1:0'] === 'complete' && data.Javascript['1:1'] === 'complete' && data.Javascript['1:2'] === 'complete' && data.Javascript['1:3'] === 'complete') {
                    await updateDoc(progressRef, {
                        "Javascript.1" : 'complete'
                    });
                }
            }
        };
    };
    const handleSubmit2 = async () => {
    setToggle2(true);
    setFeedback2('Loading...');
    const response = await openai.chat.completions.create({
        messages: [{ role: "assistant", content: `The code bellow is an attempt to solve the given practice problem bellow. Based on this attempt determine if the code correctly solve the practice problem. The output should look like this: First state if the code is "Correct" or "Incorrect". Then give "a constructive feedback that a beginner will find useful based on common coding standards and clean code. if there is no constructive feedback return 'no feedback'. code is ${code2}, practice problem is ${Chapter1.topic2.practice2}` }],
        model: "gpt-3.5-turbo",
        max_tokens: 100
    });  
    
    const feedback = response.choices[0].message.content;
        setFeedback2(feedback);

        //Add feedback to Firebase
        const currentUser = auth.currentUser;    
        if (currentUser) {
            const docRef = doc(db, 'course_feedbacks', `${currentUser.uid}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                updateDoc(docRef, {
                    feedbacks: arrayUnion({ feedback: feedback, course: 'Javascript' })
                });
            } else {
                // Add a new document in collection "cities"
                await setDoc(docRef, {
                    feedbacks: [{course: 'Javascript', feedback: feedback}]
                });
            }

            //make feedback lowwer case
            const lowerCaseFeedback = feedback.toLowerCase();
            //check if feedback contains the the string 'correct'
            if (lowerCaseFeedback.includes('correct')) {
                const progressRef = doc(db, 'progress', `${currentUser.uid}`);
                const data = docSnap.data();
                setPerformance(prevPerformance => {
                    const updatedPerformance = {...prevPerformance, p2: true};

                    //check if all performance is true
                    if (updatedPerformance.p1 && updatedPerformance.p2 && updatedPerformance.p3) {
                        //update progress
                        updateDoc(progressRef, {
                            "Javascript.1:1" : "complete",
                            "Javascript.percent" : increment(2.4)
                        });   
                    }             
                    return updatedPerformance;
                });

                if(data.Javascript['1:0'] === 'complete' && data.Javascript['1:1'] === 'complete' && data.Javascript['1:2'] === 'complete' && data.Javascript['1:3'] === 'complete') {
                    await updateDoc(progressRef, {
                        "Javascript.1" : 'complete'
                    });
                }
            }

        };
    };
    const handleSubmit3 = async () => {
        setToggle3(true);
        setFeedback3('Loading...');
        const response = await openai.chat.completions.create({
            messages: [{ role: "assistant", content: `The code bellow is an attempt to solve the given practice problem bellow. Based on this attempt determine if the code correctly solve the practice problem. The output should look like this: First state if the code is "Correct" or "Incorrect". Then give "a constructive feedback that a beginner will find useful based on common coding standards and clean code. if there is no constructive feedback return 'no feedback'. code is ${code3}, practice problem is ${Chapter1.topic2.practice3}` }],
            model: "gpt-3.5-turbo",
            max_tokens: 100
        });  
        
        const feedback = response.choices[0].message.content;
        setFeedback3(feedback);

        //Add feedback to Firebase
        const currentUser = auth.currentUser;    
        if (currentUser) {
            const docRef = doc(db, 'course_feedbacks', `${currentUser.uid}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                updateDoc(docRef, {
                    feedbacks: arrayUnion({ feedback: feedback, course: 'Javascript' })
                });
            } else {
                // Add a new document in collection "cities"
                await setDoc(docRef, {
                    feedbacks: [{course: 'Javascript', feedback: feedback}]
                });
            }

            //make feedback lowwer case
            const lowerCaseFeedback = feedback.toLowerCase();
            //check if feedback contains the the string 'correct'
            if (lowerCaseFeedback.includes('correct')) {
                const progressRef = doc(db, 'progress', `${currentUser.uid}`);
                const data = docSnap.data();
                setPerformance(prevPerformance => {
                    const updatedPerformance = {...prevPerformance, p3: true};

                    //check if all performance is true
                    if (updatedPerformance.p1 && updatedPerformance.p2 && updatedPerformance.p3) {
                        //update progress
                        updateDoc(progressRef, {
                            "Javascript.1:1" : "complete",
                            "Javascript.percent" : increment(2.4)
                        });   
                    }             
                    return updatedPerformance;
                });

                if(data.Javascript['1:0'] === 'complete' && data.Javascript['1:1'] === 'complete' && data.Javascript['1:2'] === 'complete' && data.Javascript['1:3'] === 'complete') {
                    await updateDoc(progressRef, {
                        "Javascript.1" : 'complete'
                    });
                }
            }
        };
      };

    // Define editor options, including 'readOnly'
    const editorOptions = {
        readOnly: true, // Set the editor to read-only
        automaticLayout: true, // Adjust the layout automatically
        minimap: {
            enabled: false,
        }
    };
    

    return (
        <div className='flex flex-col font-ubuntu bg-midnight text-white'>
            <div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
                <div className='flex justify-center space-x-8 p-5 m-5'>
                    <Link to='/javascript/1.1'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    </Link>
                    <Link to='/javascript/1.3'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                    </Link>
                </div>
                <h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>        
                    Data Types and Variables
                </h1>
                <p className='font-mono my-8'>
                    In this topic we dive into the fundamental building blocks of JavaScript: data types and variables. Here, we'll explore the essential concepts that form the backbone of any JavaScript program. By the end of this topic, you'll have a solid grasp of JavaScript's data types, how to declare variables, and how to work with them effectively.
                </p>

                <p className='font-mono my-8'>
                    JavaScript is a dynamic and loosely typed programming language, which means it can handle a variety of data types. In this section, we'll introduce you to three core data types:
                    Numbers: These are used for numerical values, including both integers (whole numbers) and floating-point numbers (numbers with decimals).
                    Strings: Strings are used for representing text and characters. They are enclosed in either single ('') or double ("") quotes.
                    Booleans: Booleans represent two values: true and false. They are fundamental for decision-making in your programs.
                </p>

                <p className='font-mono mt-8'>
                    To grasp these concepts, let's dive into some hands-on practice:
                </p>
                <p className='font-mono mb-8'>
                    Declaring Variables and Basic Operations:
                </p>

                <div className="editor-container">
                    <Editor
                        height="80px"
                        language="javascript"
                        theme="vs-dark"
                        value={Chapter1.topic2.example1}
                        options={editorOptions} // Apply editor options
                    />
                </div>
                <p className='font-mono my-8'>
                    Basic Operations: Perform basic operations with these variables. For instance:
                </p>
                <div className="editor-container">
                    <Editor
                        height="150px"
                        language="javascript"
                        theme="vs-dark"
                        value={Chapter1.topic2.example2}
                        options={editorOptions} // Apply editor options
                    />
                </div>

                <div className='mt-10'>
                    <h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>Practice 1</h2>
                    <p className='font-mono my-4'>
                        Define a variable called num1 and set it equal to 5. Define another called num2 and set it equal to 10. Define a third variable called sum and set it to 0. Add num1 and num2 and store the result in the sum variable. Console log the sum variable. The output should equal 15.
                    </p>
                   
                    <div className="editor-container border-t-4  border-l-4 border-r-4 border-solid border-slate-800 rounded-md">
                        <Editor
                            height="30vh"
                            language="javascript"
                            theme="vs-dark"
                            onChange={handleEditorChange1}
                            
                        />
                    </div>

                    {toggle1 && (
                        <div className=''> 
                            <div className='flex space-x-1 border-4 border-solid border-slate-800 bg-slate-800'>
                                <div className='font-mono bg-neutral-900 h-36 w-1/4 p-2 rounded-md'>
                                    <pre className='whitespace-normal'>Output: {output1}</pre>
                                </div>
                                <div className='font-mono bg-neutral-900 h-36 w-3/4 p-2 rounded-md'>
                                    <pre className='whitespace-pre-line'>Feedback: {feedback1}</pre>
                                </div> 
                            </div>
                        </div>
                    )}
                   
                    <div className='buttons-and-info-div flex space-x-2 justify-end bg-slate-900'>
                        <button className=" hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center" onClick={handleRun1} >
                            Run
                        </button>

                        <button className=" hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center" onClick={handleSubmit1}>
                            Submit
                        </button>
                    </div>

                </div>
                
                <div className='mt-10'>
                    <h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>Practice 2 </h2>
                    <p className='font-mono my-4'>
                        Declare two variables, length and width, and assign them values. Then, calculate the area by multiplying length and width. Finally, display the result using console.log.
                    </p>
                   
                    <div className="editor-container border-t-4  border-l-4 border-r-4 border-solid border-slate-800 rounded-md">
                        <Editor
                            height="30vh"
                            language="javascript"
                            theme="vs-dark"
                            onChange={handleEditorChange2}
                        />
                    </div>

                    {toggle2 && (
                        <div className=''> 
                            <div className='flex space-x-1 border-4 border-solid border-slate-800 bg-slate-800'>
                                <div className='font-mono bg-neutral-900 h-36 w-1/4 p-2 rounded-md'>
                                    <pre className='whitespace-normal'>Output: {output2}</pre>
                                </div>
                                <div className='font-mono bg-neutral-900 h-36 w-3/4 p-2 rounded-md'>
                                    <pre className='whitespace-pre-line'>Feedback: {feedback2}</pre>
                                </div> 
                            </div>
                        </div>
                    )}
                    <div className='buttons-and-info-div flex space-x-2 justify-end bg-slate-900'>
                        <button className=" hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center" onClick={handleRun2}>
                            Run
                        </button>

                        <button className=" hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center" onClick={handleSubmit2}>
                            Submit
                        </button>
                    </div>

                </div>

                <div className='mt-10'>
                    <h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>Practice 3 </h2>
                    <p className='font-mono my-4'>
                        Declare multiple variables to represent the prices of different items (e.g., item1Price, item2Price, etc.), and declare a variable totalCost to store the final result. Assign prices to each item. Then, calculate the total cost by adding up the prices of all the items. Display the total cost using console.log().
                    </p>
                   
                    <div className="editor-container border-t-4  border-l-4 border-r-4 border-solid border-slate-800 rounded-md">
                        <Editor
                            height="30vh"
                            language="javascript"
                            theme="vs-dark"
                            onChange={handleEditorChange3}
                            
                        />
                    </div>

                    {toggle3 && (
                        <div className=''> 
                            <div className='flex space-x-1 border-4 border-solid border-slate-800 bg-slate-800'>
                                <div className='font-mono bg-neutral-900 h-36 w-1/4 p-2 rounded-md'>
                                    <pre className='whitespace-normal'>Output: {output3}</pre>
                                </div>
                                <div className='font-mono bg-neutral-900 h-36 w-3/4 p-2 rounded-md'>
                                    <pre className='whitespace-pre-line'>Feedback: {feedback3}</pre>
                                </div> 
                            </div>
                        </div>
                    )}
                    <div className='buttons-and-info-div flex space-x-2 justify-end bg-slate-900'>
                        <button className=" hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center" onClick={handleRun3}>
                            Run
                        </button>

                        <button className=" hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center" onClick={handleSubmit3}>
                            Submit
                        </button>
                    </div>

                </div>
                <div className='flex justify-center space-x-8 p-5 m-5'>
                    <Link to='/javascript/1.1'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                    </Link>
                    <Link to='/javascript/1.3'>
                        <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                    </Link>
                </div>
            </div>
            <Chatbot />
        </div>
    );
};

export default DataTypesAndVariables;

