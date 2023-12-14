import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Link } from 'react-router-dom'; // Import NavLink
import { auth, db } from '../../../../config/firebaseConfig';
import {
	setDoc,
	collection,
	addDoc,
	arrayUnion,
	updateDoc,
	increment,
	doc,
	Firestore,
	getDoc,
} from 'firebase/firestore';

import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';

//Chapter 1 contains the code examples and practice problems for the chapter
import Chapter1 from './PracticeAndExamples';

import Chatbot from '../../../../components/Chatbot/Chatbot';


const PythonElif = () => {
	const [code1, setCode1] = useState('');
	const [code2, setCode2] = useState('');
	const [code3, setCode3] = useState('');

	const [output1, setOutput1] = useState('');
	const [output2, setOutput2] = useState('');
	const [output3, setOutput3] = useState('');

	const [feedback1, setFeedback1] = useState('');
	const [feedback2, setFeedback2] = useState('');
	const [feedback3, setFeedback3] = useState('');

	const [toggle1, setToggle1] = useState(false);
	const [toggle2, setToggle2] = useState(false);
	const [toggle3, setToggle3] = useState(false);

	function handleEditorChange1(value) {
		console.log('here is the current model value:', value);
		setCode1(value);
	}
	function handleEditorChange2(value) {
		console.log('here is the current model value:', value);
		setCode2(value);
	}
	function handleEditorChange3(value) {
		console.log('here is the current model value:', value);
		setCode3(value);
	}

	const handleRun1 = async () => {
        setToggle1(true);
        setOutput1('Loading...');
        setFeedback1('');
        try {
            const response = await fetch('http://127.0.0.1:5000/api/runcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code1 }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            setOutput1(result);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    const handleRun2 = async () => {
        setToggle2(true);
        setOutput2('Loading...');
        setFeedback2('');
        try {
            const response = await fetch('http://127.0.0.1:5000/api/runcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code2 }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            setOutput2(result);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    const handleRun3 = async () => {
        setToggle3(true);
        setOutput3('Loading...');
        setFeedback2('');
        try {
            const response = await fetch('http://127.0.0.1:5000/api/runcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code3 }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            setOutput3(result);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    const handleSubmit1 = async () => {
        setToggle1(true);
        setFeedback1('Loading...');
        setOutput1('Loading...');
        let feedback = '';
        try {
            const response = await fetch('http://127.0.0.1:5000/api/submitcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code1, practice: Chapter1.topic3.practice1 }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            const resultJson = JSON.parse(result);
            feedback = resultJson.feedback;
            setFeedback1(resultJson.feedback);
            setOutput1(resultJson.evaluation);
        } catch (error) {
            console.error('Error:', error.message);
        }
        //Add feedback to Firebase
        const currentUser = auth.currentUser;
        if (currentUser) {
            const docRef = doc(db, 'course_feedbacks', `${currentUser.uid}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                updateDoc(docRef, {
                    feedbacks: arrayUnion({ feedback: feedback, course: 'Python', problem:  Chapter1.topic3.practice1})
                });
            } else {
                // Add a new document in collection "cities"
                await setDoc(docRef, {
                    feedbacks: [{course: 'Python', feedback: feedback, problem: Chapter1.topic3.practice1}]
                });
            }
        };

    };
    const handleSubmit2 = async () => {
        setToggle2(true);
        setFeedback2('Loading...');
        setOutput2('Loading...');
        let feedback = '';
        try {
            const response = await fetch('http://127.0.0.1:5000/api/submitcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code2, practice: Chapter1.topic3.practice2 }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            const resultJson = JSON.parse(result);
            feedback = resultJson.feedback;
            setFeedback2(resultJson.feedback);
            setOutput2(resultJson.evaluation);
        } catch (error) {
            console.error('Error:', error.message);
        }
        //Add feedback to Firebase
        const currentUser = auth.currentUser;
        if (currentUser) {
            const docRef = doc(db, 'course_feedbacks', `${currentUser.uid}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                updateDoc(docRef, {
                    feedbacks: arrayUnion({ feedback: feedback, course: 'Python', problem:  Chapter1.topic3.practice2})
                });
            } else {
                // Add a new document in collection "cities"
                await setDoc(docRef, {
                    feedbacks: [{course: 'Python', feedback: feedback, problem: Chapter1.topic3.practice2}]
                });
            }

        };
    };
    const handleSubmit3 = async () => {
        setToggle3(true);
        setFeedback3('Loading...');
        setOutput3('Loading...');
        let feedback = '';
        try {
            const response = await fetch('http://127.0.0.1:5000/api/submitcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code1, practice: Chapter1.topic3.practice3}),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            const resultJson = JSON.parse(result);
            feedback = resultJson.feedback;
            setFeedback3(resultJson.feedback);
            setOutput3(resultJson.evaluation);
        } catch (error) {
            console.error('Error:', error.message);
        }
        //Add feedback to Firebase
        const currentUser = auth.currentUser;
        if (currentUser) {
            const docRef = doc(db, 'course_feedbacks', `${currentUser.uid}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                updateDoc(docRef, {
                    feedbacks: arrayUnion({ feedback: feedback, course: 'Python', problem:  Chapter1.topic3.practice3})
                });
            } else {
                // Add a new document in collection "cities"
                await setDoc(docRef, {
                    feedbacks: [{course: 'Python', feedback: feedback, problem: Chapter1.topic3.practice3}]
                });
            }


        };
    };
	// Define editor options, including 'readOnly'
	const editorOptions = {
		readOnly: true, // Set the editor to read-only
		automaticLayout: true, // Adjust the layout automatically
		minimap: {
			enabled: false,
		},
	};

	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const progressSnap = await getDoc(progressRef);
			const data = progressSnap.data();
			if (!data.Python['4:3']) {
				await updateDoc(progressRef, {
					'Python.4:3': 'complete',
					'Python.percent': increment(2.71),
				});
			}
		}
	};

	return (
		<div className='flex flex-col font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/python/4.2'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/python/4.4' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					The Elif Statement
				</h1>
				<p className='font-mono my-8'>
					The Elif (short for "else if") statement is used to check multiple
					conditions in a series. It follows an if statement and is evaluated if
					the previous if or elif conditions are False. Here's the syntax:
				</p>

				<div className='editor-container'>
					<Editor
						height='120px'
						language='python'
						theme='vs-dark'
						value={Chapter1.topic3.example1}
						options={editorOptions} // Apply editor options
					/>
				</div>

				<p className='font-mono mb-8'>Here is an example of that:</p>

				<div className='editor-container'>
					<Editor
						height='200px'
						language='python'
						theme='vs-dark'
						value={Chapter1.topic3.example2}
						options={editorOptions} // Apply editor options
					/>
				</div>

				<p className='font-mono mb-8'>
					In this example, the elif statements allow you to define multiple
					conditions and execute code based on the first condition that is True.
				</p>

				<div className='mt-10'>
					<h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>
						Practice 1: Grade Calculator{' '}
					</h2>
					<p className='font-mono my-4'>
						Write a Python program that asks the user to enter a numerical grade
						between 0 and 100. Use an "if-elif-else" statement to assign a
						letter grade (A, B, C, D, or F) based on the following scale:
						<br></br>90-100: A<br></br>80-89: B<br></br>70-79: C<br></br>60-69:
						D<br></br>0-59: F Display the calculated letter grade.
					</p>

					<div className='editor-container border-t-4  border-l-4 border-r-4 border-solid border-slate-800 rounded-md'>
						<Editor
							height='20vh'
							language='python'
							theme='vs-dark'
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
									<pre className='whitespace-pre-line'>
										Feedback: {feedback1}
									</pre>
								</div>
							</div>
						</div>
					)}

					<div className='buttons-and-info-div flex space-x-2 justify-end bg-slate-900'>
						<button
							className=' hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center'
							onClick={handleRun1}
						>
							Run
						</button>

						<button
							className=' hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center'
							onClick={handleSubmit1}
						>
							Submit
						</button>
					</div>
				</div>

				<div className='mt-10'>
					<h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>
						Practice 2: Tax Calculator
					</h2>
					<p className='font-mono my-4'>
						Create a Python program for a simple tax calculator. Ask the user to
						enter their annual income. Use an "if-elif-else" statement to
						calculate and display the income tax as follows:
						<br></br>If income is less than $50,000, tax is 10%.
						<br></br>If income is between $50,000 and $100,000, tax is 20%.
						<br></br>If income is greater than $100,000, tax is 30%.
					</p>

					<div className='editor-container border-t-4  border-l-4 border-r-4 border-solid border-slate-800 rounded-md'>
						<Editor
							height='20vh'
							language='python'
							theme='vs-dark'
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
									<pre className='whitespace-pre-line'>
										Feedback: {feedback2}
									</pre>
								</div>
							</div>
						</div>
					)}
					<div className='buttons-and-info-div flex space-x-2 justify-end bg-slate-900'>
						<button
							className=' hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center'
							onClick={handleRun2}
						>
							Run
						</button>

						<button
							className=' hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center'
							onClick={handleSubmit2}
						>
							Submit
						</button>
					</div>
				</div>

				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/python/4.2'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/python/4.4'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
			</div>
			<Chatbot />
		</div>
	);
};

export default PythonElif;
