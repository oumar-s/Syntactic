import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Link } from 'react-router-dom'; 
import { auth, db } from '../../../../config/firebaseConfig';
import {
	setDoc,
	arrayUnion,
	updateDoc,
	increment,
	doc,
	getDoc,
} from 'firebase/firestore';

import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';

//Chapter 1 contains the code examples and practice problems for the chapter
import Chapter1 from './PracticeAndExamples';

import Chatbot from '../../../../components/Chatbot/Chatbot';

const PythonLists1 = () => {
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
            const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/runcode', {
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
            const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/runcode', {
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
            const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/runcode', {
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
            const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/submitcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code1, practice: Chapter1.topic1.practice1 }),
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
                    feedbacks: arrayUnion({ feedback: feedback, course: 'Python', problem:  Chapter1.topic1.practice1})
                });
            } else {
                
                await setDoc(docRef, {
                    feedbacks: [{course: 'Python', feedback: feedback, problem: Chapter1.topic1.practice1}]
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
            const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/submitcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code2, practice: Chapter1.topic1.practice2 }),
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
                    feedbacks: arrayUnion({ feedback: feedback, course: 'Python', problem:  Chapter1.topic1.practice2})
                });
            } else {
                
                await setDoc(docRef, {
                    feedbacks: [{course: 'Python', feedback: feedback, problem: Chapter1.topic1.practice2}]
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
            const response = await fetch('https://syntactic-backend-d1b6d0af8db5.herokuapp.com/api/submitcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code1, practice: Chapter1.topic1.practice3}),
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
                    feedbacks: arrayUnion({ feedback: feedback, course: 'Python', problem:  Chapter1.topic1.practice3})
                });
            } else {
                
                await setDoc(docRef, {
                    feedbacks: [{course: 'Python', feedback: feedback, problem: Chapter1.topic1.practice3}]
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
			if (!data.Python['6:1']) {
				await updateDoc(progressRef, {
					'Python.6:1': 'complete',
					'Python.percent': increment(2.71),
				});
			}
		}
	};

	return (
		<div className='flex flex-col font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/python/6.0'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/python/6.2' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					Creating Lists In Python
				</h1>

				<p className='font-mono my-8'>
					You can create a list by enclosing a comma-separated sequence of
					values in square brackets ([]):
				</p>

				<div className='editor-container'>
					<Editor
						height='100px'
						language='python'
						theme='vs-dark'
						value={Chapter1.topic1.example1}
						options={editorOptions} // Apply editor options
					/>
				</div>

				<div className='mt-10'>
					<h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>
						Practice 1: List Summation{' '}
					</h2>
					<p className='font-mono my-4'>
						Write a Python program that calculates and prints the sum of all
						numbers in a given list of integers.
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
						Practice 2: List Concatenation
					</h2>
					<p className='font-mono my-4'>
						Create a Python program that takes two lists and concatenates them
						into a single list.
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

				<div className='mt-10'>
					<h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>
						Practice 3: List Searching
					</h2>
					<p className='font-mono my-4'>
						Design a Python program that asks the user to enter an element and
						checks if it exists in a predefined list. Display an appropriate
						message.
					</p>

					<div className='editor-container border-t-4  border-l-4 border-r-4 border-solid border-slate-800 rounded-md'>
						<Editor
							height='20vh'
							language='python'
							theme='vs-dark'
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
									<pre className='whitespace-pre-line'>
										Feedback: {feedback3}
									</pre>
								</div>
							</div>
						</div>
					)}
					<div className='buttons-and-info-div flex space-x-2 justify-end bg-slate-900'>
						<button
							className=' hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center'
							onClick={handleRun3}
						>
							Run
						</button>

						<button
							className=' hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center'
							onClick={handleSubmit3}
						>
							Submit
						</button>
					</div>
				</div>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/python/6.0'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/python/6.2'>
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

export default PythonLists1;
