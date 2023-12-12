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
import Chatbot from '../../../../components/Chatbot/Chatbot';

//Chapter 1 contains the code examples and practice problems for the chapter
import Chapter1 from './PracticeAndExamples';

import { OpenAI } from 'openai';
const openai = new OpenAI({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

const PythonDataTypes = () => {
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
		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'assistant',
					content: `Evaluate the Python code below and return only the output. If there a syntax error, return "Syntax error." If there is no valid output, return nothing, If there is no valid output, return nothing. ${code1}`,
				},
			],
			model: 'gpt-3.5-turbo',
			max_tokens: 100,
		});
		setOutput1(response.choices[0].message.content);
	};
	const handleRun2 = async () => {
		setToggle2(true);
		setOutput2('Loading...');
		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'assistant',
					content: `Evaluate the Python code below and return only the output. If there a syntax error, return "Syntax error." If there is no valid output, return nothing, If there is no valid output, return nothing. ${code2}`,
				},
			],
			model: 'gpt-3.5-turbo',
			max_tokens: 100,
		});
		setOutput2(response.choices[0].message.content);
	};
	const handleRun3 = async () => {
		setToggle3(true);
		setOutput3('Loading...');
		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'assistant',
					content: `Evaluate the Python code below and return only the output. If there a syntax error, return "Syntax error." If there is no valid output, return nothing, If there is no valid output, return nothing. ${code3}`,
				},
			],
			model: 'gpt-3.5-turbo',
			max_tokens: 100,
		});
		setOutput3(response.choices[0].message.content);
	};

	const handleSubmit1 = async () => {
		setToggle1(true);
		setFeedback1('Loading...');
		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'assistant',
					content: `The code below is an attempt to solve the given practice problem bellow. Based on this attempt determine if the code correctly solve the practice problem. The output should look like this: First state if the code is "Correct" or "Incorrect". Then give "a constructive feedback that a beginner will find useful based on common coding standards and clean code. if there is no constructive feedback return 'no feedback'. code is ${code1}, practice problem is ${Chapter1.topic3.practice1}`,
				},
			],
			model: 'gpt-3.5-turbo',
			max_tokens: 100,
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
					feedbacks: arrayUnion({ feedback: feedback, course: 'Python' }),
				});
			} else {
				// Add a new document in collection "cities"
				await setDoc(docRef, {
					feedbacks: [{ course: 'Python', feedback: feedback }],
				});
			}
		}
	};
	const handleSubmit2 = async () => {
		setToggle2(true);
		setFeedback2('Loading...');
		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'assistant',
					content: `The code below is an attempt to solve the given practice problem bellow. Based on this attempt determine if the code correctly solve the practice problem. The output should look like this: First state if the code is "Correct" or "Incorrect". Then give "a constructive feedback that a beginner will find useful based on common coding standards and clean code. if there is no constructive feedback return 'no feedback'. code is ${code2}, practice problem is ${Chapter1.topic3.practice2}`,
				},
			],
			model: 'gpt-3.5-turbo',
			max_tokens: 100,
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
					feedbacks: arrayUnion({ feedback: feedback, course: 'Python' }),
				});
			} else {
				// Add a new document in collection "cities"
				await setDoc(docRef, {
					feedbacks: [{ course: 'Python', feedback: feedback }],
				});
			}
		}
	};
	const handleSubmit3 = async () => {
		setToggle3(true);
		setFeedback3('Loading...');
		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'assistant',
					content: `The code below is an attempt to solve the given practice problem bellow. Based on this attempt determine if the code correctly solve the practice problem. The output should look like this: First state if the code is "Correct" or "Incorrect". Then give "a constructive feedback that a beginner will find useful based on common coding standards and clean code. if there is no constructive feedback return 'no feedback'. code is ${code3}, practice problem is ${Chapter1.topic3.practice3}`,
				},
			],
			model: 'gpt-3.5-turbo',
			max_tokens: 100,
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
					feedbacks: arrayUnion({ feedback: feedback, course: 'Python' }),
				});
			} else {
				// Add a new document in collection "cities"
				await setDoc(docRef, {
					feedbacks: [{ course: 'Python', feedback: feedback }],
				});
			}
		}
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
			if (!data.Python['2:3']) {
				await updateDoc(progressRef, {
					'Python.2:3': 'complete',
					'Python.percent': increment(2.71),
				});
			}
		}
	};

	return (
		<div className='flex flex-col font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/python/2.2'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/python/2.4' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					Data Types in Python
				</h1>
				<p className='font-mono my-8'>
					Python has some fundamental data types that you should know: <br></br>
					Integers (int): Whole numbers, like 1, -3, or 42. <br></br>
					Floating-Point Numbers (float): Numbers with decimals, such as 3.14 or
					-0.5. <br></br>
					Strings (str): Text, enclosed in single or double quotes, like "Hello"
					or 'Python'. <br></br>
					Booleans (bool): Binary values: True or False. <br></br>
					These basic data types are the building blocks for most Python
					programs. You'll use them for numbers, text, and making decisions in
					your code.
				</p>

				<p className='font-mono mt-8'>
					To grasp these concepts, let's dive into some hands-on practice:
				</p>
				<p className='font-mono mb-8'>
					We can do user input and output by doing the following:
				</p>

				<div className='editor-container'>
					<Editor
						height='350px'
						language='python'
						theme='vs-dark'
						value={Chapter1.topic3.example1}
						options={editorOptions} // Apply editor options
					/>
				</div>

				<div className='mt-10'>
					<h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>
						Practice 1: User Variables{' '}
					</h2>
					<p className='font-mono my-4'>
						Write a Python program that defines variables for the following user
						attributes: name, age, favorite color, and whether the user is a
						student. Then, print out the user information
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
					<p className='font-mono my-8'>
						This is an example on how to print out the Data Type of a variable.
					</p>
					<div className='editor-container'>
						<Editor
							height='100px'
							language='python'
							theme='vs-dark'
							value={Chapter1.topic3.example2}
							options={editorOptions} // Apply editor options
						/>
					</div>
				</div>

				<div className='mt-10'>
					<h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>
						Practice 2: Printing Out Data Types
					</h2>
					<p className='font-mono my-4'>
						Write a Python program that defines variables for the following
						information about a person: name, age, height (in meters), and
						whether they are married (True or False). Then, print out the type
						of each variable.
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

				<p className='font-mono my-8'>
					This is an example on how to convert between datatypes.
				</p>
				<div className='editor-container'>
					<Editor
						height='250px'
						language='python'
						theme='vs-dark'
						value={Chapter1.topic3.example3}
						options={editorOptions} // Apply editor options
					/>
				</div>

				<div className='mt-10'>
					<h2 className='text-base md:text-xl font-bold bg-slate-700 p-2'>
						Practice 3: Type Conversion
					</h2>
					<p className='font-mono my-4'>
						Write a Python program that collects the user's age as a string
						input and converts it to an integer for further processing.
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
					<Link to='/python/2.2'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/python/2.4'>
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

export default PythonDataTypes;
