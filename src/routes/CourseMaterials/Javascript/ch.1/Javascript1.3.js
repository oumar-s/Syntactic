import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { auth, db } from '../../../../config/firebaseConfig';
import {
	getDoc,
	collection,
	setDoc,
	arrayUnion,
	updateDoc,
	doc,
	Firestore,
} from 'firebase/firestore';

import { Link } from 'react-router-dom'; // Import NavLink

import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';
import LeitnerSystem from '../../../../utilities/Leitner'; //Spaced Repetition Algorithm

import Chapter1 from './PracticeAndExamples';
// import css
import './Javascript1.3.css';

import { OpenAI } from 'openai';

// Initialize OpenAI
const openai = new OpenAI({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

const Examination = () => {
	const [code, setCode] = useState('');
	const [output, setOutput] = useState('');
	const [selectedTab, setSelectedTab] = useState(1);
	const [practice, setPractice] = useState(Chapter1.exam[1]);
	const [userUID, setUserUID] = useState(null);
	const [codeMap, setCodeMap] = useState(new Map());

	const leitner = new LeitnerSystem(); // Create a Leitner System with 3 boxes
	leitner.addItem(Chapter1.exam[1]);
	leitner.addItem(Chapter1.exam[2]);
	leitner.addItem(Chapter1.exam[3]);
	leitner.addItem(Chapter1.exam[4]);
	leitner.addItem(Chapter1.exam[5]);

	// console.log('leitner current box', leitner.currentBox);

	const [review, setReview] = useState(leitner); //Spaced Repetition Algorithm

	/*
    
	useEffect(() => {
		const currentUser = auth.currentUser;

		if (currentUser) {
			setUserUID(currentUser.uid);
			const fetchReviewData = async () => {
				try {
					const docRef = doc(db, 'reviews', `${userUID}`);
					const docSnap = await getDoc(docRef);
					if (docSnap.exists()) {
						console.log(
							'Document Data (review):',
							docSnap.data(),
						);
						leitner.boxes[0] = docSnap.data().Javascript.box1;
	                    leitner.boxes[1] = docSnap.data().Javascript.box2;
	                    leitner.boxes[2] = docSnap.data().Javascript.box2;
	leitner.addItem(Chapter1.exam[1]);
	leitner.addItem(Chapter1.exam[2]);
	leitner.addItem(Chapter1.exam[3]);
	leitner.addItem(Chapter1.exam[4]);
	leitner.addItem(Chapter1.exam[5]);
					} else {
						// doc.data() will be undefined in this case
						console.log('No such document!');
					}
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			};

			fetchReviewData();
		}
	}, [userUID, leitner]);
    */

	// Handle tab selection
	const handleTabClick = (tabNumber) => {
		setCodeMap(new Map(codeMap.set(selectedTab, code))); // Save current code

		setSelectedTab(tabNumber);
		setPractice(Chapter1.exam[tabNumber]);

		setCode(codeMap.get(tabNumber) || ''); // Load new code or empty string
	};

	// Handle code changes in the editor
	function handleEditorChange(value, event) {
		// console.log('here is the current model value:', value);
		setCode(value);
		setCodeMap(new Map(codeMap.set(selectedTab, value))); // Update code in map
	}

	// Run code using OpenAI
	const handleRun = async () => {
		setOutput('Loading...');
		const currentCode = codeMap.get(selectedTab) || '';

		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'assistant',
					content: `Evaluate the javascript code bellow and return only the output. If there a syntax error, return "Syntax error." If there is no valid output, return nothing, If there is no valid output, return nothing. The code is: ${currentCode}`,
				},
			],
			model: 'gpt-3.5-turbo',
			max_tokens: 100,
		});
		setOutput(response.choices[0].message.content);
	};

	// Submit code for feedback
	const handleSubmit = async () => {
		setOutput('Loading...');
		const currentCode = codeMap.get(selectedTab) || '';

		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'assistant',
					content: `Evaluate the submitted JavaScript code to determine if it completely and correctly solves the given practice problem. First, check if the code submission is not empty. If no code is submitted, return "Incorrect" with the note "No code submitted". If code is submitted, ensure that it addresses all aspects of the problem. The evaluation should be strict: any partial solution or incorrect implementation should be marked as "Incorrect". When providing feedback for incorrect or incomplete submissions, focus solely on identifying the elements or aspects that are missing or incorrect in the submitted code. Avoid giving direct solutions or hints on how to solve the problem. The goal is to encourage the user to think critically and solve the problem independently. If the code fully solves the problem, mark it as "Correct". After the correctness evaluation, provide constructive feedback aimed at beginners, focusing on code quality and adherence to clean coding principles. If there is no specific feedback, return 'No feedback'. The submitted code is: ${currentCode}. The practice problem is: ${practice?.practice}`,
				},
			],
			model: 'gpt-3.5-turbo',
			max_tokens: 100,
		});

		const feedback = response.choices[0].message.content;
		setOutput(feedback);

		// console.log('GPT Response: ', response);

		//check correctness
		/* 
		const response2 = await openai.chat.completions.create({
		    messages: [{ role: "assistant", content: `The code bellow is an attempt to solve the given practice problem bellow. Based on this attempt determine if the code correctly solve the practice problem. if the code is correct return "Correct" else return "Incorrect". code is ${code}, practice problem is ${practice.practice}` }],
		    model: "gpt-3.5-turbo",
		    max_tokens: 5
		});
		const correctness = response2.choices[0].message.content;
		console.log('correctness', correctness);
		if((correctness.toLowerCase()) === 'correct'){
		    //leitner.addItem(practice);
		    leitner.moveToNextBox(practice);
		}else{
		    //leitner.addItem(practice);
		    leitner.moveToFirstBox(practice);
		}
        */

		const currentUser = auth.currentUser;
		if (currentUser) {
			if (selectedTab === 5) {
				leitner.addItem(Chapter1.exam[1]);
				leitner.addItem(Chapter1.exam[2]);
				leitner.addItem(Chapter1.exam[3]);
				leitner.addItem(Chapter1.exam[4]);
				leitner.addItem(Chapter1.exam[5]);
				//update review in Firebase
				const docRefReview = doc(db, 'reviews', `${currentUser.uid}`);
				//const docSnapReview = await getDoc(docRefReview);
				console.log('leitner boxes', leitner.boxes);
				updateDoc(docRefReview, {
					Javascript: {
						box1: leitner.boxes[0],
						box2: leitner.boxes[1],
						box3: leitner.boxes[2],
						current: leitner.currentBox,
						next: leitner.getNextItemToReview(),
					},
				});
			}
			//Add feedback to Firebase
			const docRef = doc(db, 'course_feedbacks', `${currentUser.uid}`);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				updateDoc(docRef, {
					feedbacks: arrayUnion({ feedback: feedback, course: 'Javascript' }),
				});
			} else {
				// Add a new document in collection "cities"
				await setDoc(docRef, {
					feedbacks: [{ course: 'Javascript', feedback: feedback }],
				});
			}
		}
	};

	// Convert Chapter1.exam from an object to an array for the initial state
	const initialProblems = Object.values(Chapter1.exam);
	const [practiceProblems, setPracticeProblems] = useState(initialProblems);
	const [tabsCount, setTabsCount] = useState(5);
	const [isLoading, setIsLoading] = useState(false);

	const handleMorePractice = async () => {
		setIsLoading(true); // Start loading

		// Request new practice problems from OpenAI
		const response = await openai.chat.completions.create({
			messages: [
				{
					role: 'assistant',
					content: `Generate 5 new JavaScript practice problems for beginners, focusing on variables and logging outputs. Each problem should be presented as a standalone statement without any preceding numbers or labels. Avoid labeling with numbers or alphabets. The problems should be unique, testing different aspects of working with variables and outputting data in JavaScript.`,
				},
			],
			model: 'gpt-3.5-turbo',
			max_tokens: 500, // Adjust token limit based on need
		});

		// Extract the generated problems
		const newProblems = response.choices[0].message.content
			.split('\n\n')
			.map((problem) => problem.replace(/^\d+\.\s*/, '')) // Remove any leading numbers and labels
			.map((formattedProblem, index) => ({
				id: practiceProblems.length + index + 1,
				practice: formattedProblem,
			}));

		// Update the state to include these new problems
		setPracticeProblems([...practiceProblems, ...newProblems]);
		setTabsCount((prevCount) => prevCount + newProblems.length);
		setIsLoading(false); // End loading
		// console.log('New Practice Problems:', newProblems);
		// console.log('Practice Problems:', practiceProblems);
	};

	return (
		<div className='bg-midnight pt-1'>
			<div className='flex justify-center space-x-8 p-5 m-5'>
				<Link to='/javascript/1.2'>
					<img
						className='bg-slate-400 hover:bg-gray-300 p-2'
						src={leftArrowIcon}
						alt='Left arrow Icon'
					/>
				</Link>
				<Link to='/javascript/projects'>
					<img
						className='bg-slate-400 hover:bg-gray-300 p-2'
						src={rightArrowIcon}
						alt='Right arrow Icon'
					/>
				</Link>
			</div>
			<div className='flex flex-wrap md:flex-nowrap  font-ubuntu bg-midnight text-white'>
				<div className='w-1/2 h-fit overflow-auto pl-5 pr-5'>
					<h1 className='text-2xl md:text-4xl font-bold bg-slate-700 p-4'>
						Chapter 1 Exam
					</h1>
					<p className='font-mono my-8'>
						Answer each of the practice questions bellow to the best of your
						ability. Your performance here will be used to build your
						specialized review list.
					</p>

					<div className='w-fit '>
						<nav className='bg-slate-900'>
							<ul
								className='flex overflow-x-auto whitespace-nowrap'
								style={{ width: '750px' }}
							>
								{practiceProblems.map((_, index) => (
									<li
										key={index + 1}
										className={`cursor-pointer p-4 ${
											selectedTab === index + 1 ? 'bg-gray-600' : ''
										} hover:bg-gray-600`}
										onClick={() => handleTabClick(index + 1)}
									>
										Practice {index + 1}
									</li>
								))}
							</ul>
						</nav>
						<div className='practice-problem-text p-4 mt-4 text-slate-300'>
							{practiceProblems[selectedTab - 1] && (
								<p className='font-mono my-2'>
									{practiceProblems[selectedTab - 1].practice}
								</p>
							)}
						</div>
					</div>

					<div className='buttons-and-info-div flex space-x-2 justify-center pt-30 pb-16 mt-16'>
						<button
							className={`hover:bg-gray-600 p-4 text-white font-semibold bg-slate-900 ${
								isLoading ? 'loading cursor-not-allowed' : ''
							}`}
							onClick={handleMorePractice}
							disabled={isLoading}
						>
							{isLoading ? 'Loading...' : 'More Practice Problems'}
						</button>
					</div>
				</div>

				<div className='w-1/2'>
					<div className='editor-container border-t-4  border-l-4 border-r-4 border-solid border-slate-800'>
						<Editor
							height='65vh'
							language='javascript'
							theme='vs-dark'
							value={codeMap.get(selectedTab) || ''}
							onChange={handleEditorChange}
						/>
					</div>

					<div className='buttons-and-info-div flex space-x-2 justify-center bg-slate-900 '>
						<button
							className=' hover:bg-gray-600 text-white font-semibold w-20 h-10 flex items-center justify-center'
							onClick={handleRun}
						>
							Run
						</button>

						<button
							className=' hover:bg-gray-600 text-green-500 font-semibold w-20 h-10 flex items-center justify-center'
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>

<<<<<<< HEAD
                    <div className='bg-black h-52 p-2 border-2 border-solid border-slate-800'>
                        <pre className='whitespace-pre-line'>{output}</pre>
                    </div>

                </div>
            </div>
            <Chatbot />
            {/* <div className='flex justify-center space-x-8 p-5 m-5'>
=======
					<div className='bg-black h-52 p-2 border-2 border-solid border-slate-800'>
						<pre className='whitespace-pre-line'>{output}</pre>
					</div>
				</div>
			</div>
			{/* <div className='flex justify-center space-x-8 p-5 m-5'>
>>>>>>> 334f0b2 (Get more JS practice problems)
                <Link to='/javascript/1.1'>
                    <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                </Link>
                <Link to='/javascript/1.3'>
                    <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                </Link>
            </div> */}
		</div>
	);
};

export default Examination;
