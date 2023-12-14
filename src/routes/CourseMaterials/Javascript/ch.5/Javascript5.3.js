import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { auth, db } from '../../../../config/firebaseConfig';
import {
	getDoc,
	collection,
	setDoc,
	arrayUnion,
	updateDoc,
	increment,
	doc,
	Firestore,
} from 'firebase/firestore';

import { Link } from 'react-router-dom'; // Import NavLink

import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import LeitnerSystem from '../../../../utilities/Leitner'; //Spaced Repetition Algorithm

import Chapter1 from './PracticeAndExamples';


import { generatePracticeProblems } from '../../../../utilities/generatePracticeProblems';

import Chatbot from '../../../../components/Chatbot/Chatbot';


const Examination5 = () => {
	const leitner = new LeitnerSystem(); // Create a Leitner System with 3 boxes
	leitner.addItem(Chapter1.exam[1]);
	leitner.addItem(Chapter1.exam[2]);
	leitner.addItem(Chapter1.exam[3]);
	leitner.addItem(Chapter1.exam[4]);
	leitner.addItem(Chapter1.exam[5]);

	console.log('leitner current box', leitner.currentBox);

	const [code, setCode] = useState('');
	const [output, setOutput] = useState('');
	const [selectedTab, setSelectedTab] = useState(1);
	const [practice, setPractice] = useState(Chapter1.exam[1]);
	//const [review, setReview] = useState(leitner); //Spaced Repetition Algorithm
	const [userUID, setUserUID] = useState(null);

	// useEffect(() => {
	// 	const currentUser = auth.currentUser;

	// 	if (currentUser) {
	// 		setUserUID(currentUser.uid);
	// 		const fetchReviewData = async () => {
	// 			try {
	// 				const docRef = doc(db, 'reviews', `${userUID}`);
	// 				const docSnap = await getDoc(docRef);
	// 				if (docSnap.exists()) {
	// 					console.log(
	// 						'Document Data (review):',
	// 						docSnap.data(),
	// 					);
	// 					leitner.boxes[0] = docSnap.data().Javascript.box1;
	//                     leitner.boxes[1] = docSnap.data().Javascript.box2;
	//                     leitner.boxes[2] = docSnap.data().Javascript.box2;
	// leitner.addItem(Chapter1.exam[1]);
	// leitner.addItem(Chapter1.exam[2]);
	// leitner.addItem(Chapter1.exam[3]);
	// leitner.addItem(Chapter1.exam[4]);
	// leitner.addItem(Chapter1.exam[5]);
	// 				} else {
	// 					// doc.data() will be undefined in this case
	// 					console.log('No such document!');
	// 				}
	// 			} catch (error) {
	// 				console.error('Error fetching data:', error);
	// 			}
	// 		};

	// 		fetchReviewData();
	// 	}
	// }, [userUID, leitner]);

	const handleTabClick = (tabNumber) => {
		console.log('practice', practice);
		setSelectedTab(tabNumber);
		setPractice(Chapter1.exam[tabNumber]);
	};

	function handleEditorChange(value, event) {
		console.log('here is the current model value:', value);
		setCode(value);
	}

	const handleRun = async () => {
		setOutput('Loading...');
        try {
            const response = await fetch('http://127.0.0.1:5000/api/runcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            setOutput(result);
        } catch (error) {
            console.error('Error:', error.message);
        }
	};

	// Submit code for feedback
	const handleSubmit = async () => {
		setOutput('Loading...');
		const currentPracticeProblem = practice?.practice; // Get the current practice problem

		let feedback = '';
        try {
            const response = await fetch('http://127.0.0.1:5000/api/submitcode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code: code, practice: practice?.practice }),
            });
      
            if (!response.ok) {
              throw new Error('Failed to fetch');
            }
      
            const result = await response.json();
            console.log(result);
            const resultJson = JSON.parse(result);
            feedback = resultJson.feedback;
            setOutput(resultJson.evaluation);
        } catch (error) {
            console.error('Error:', error.message);
        }


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
					feedbacks: arrayUnion({
						feedback: feedback,
						course: 'Javascript',
						problem: currentPracticeProblem,
					}),
				});
			} else {
				await setDoc(docRef, {
					feedbacks: [
						{
							course: 'Javascript',
							feedback: feedback,
							problem: currentPracticeProblem, // Include practice problem
						},
					],
				});
			}
		}
	};

	const [tabsCount, setTabsCount] = useState(5);
	const initialProblems = Object.values(Chapter1.exam);
	const [practiceProblems, setPracticeProblems] = useState(initialProblems);
	const [isLoading, setIsLoading] = useState(false);

	const handleMorePractice = async () => {
		const newProblems = await generatePracticeProblems(
			'just arrays and objects',
			practiceProblems,
			setIsLoading,
		);
		setPracticeProblems((prevProblems) => [...prevProblems, ...newProblems]);
		setTabsCount((prevCount) => prevCount + newProblems.length);
	};

	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const data = (await getDoc(progressRef)).data();
			if (!data.Javascript['5:3']) {
				await updateDoc(progressRef, {
					'Javascript.5:3': 'complete',
					'Javascript.percent': increment(2.4),
				});
			}

			//check if all topics are complete
			// const allTopics = data.Javascript;
			// let allComplete = true;
			// for (const topic in allTopics) {
			//     if (allTopics[topic] !== 'complete') {
			//         allComplete = false;
			//     }
			// }

			if (
				data.Javascript['5:0'] === 'complete' &&
				data.Javascript['5:1'] === 'complete' &&
				data.Javascript['5:2'] === 'complete' &&
				data.Javascript['5:3'] === 'complete'
			) {
				await updateDoc(progressRef, {
					'Javascript.5': 'complete',
				});
			}
		}
	};

	return (
		<div className='bg-midnight pt-1'>
			<div className='flex justify-center space-x-8 p-5 m-5'>
				<Link to='/javascript/5.2'>
					<img
						className='bg-slate-400 hover:bg-gray-300 p-2'
						src={leftArrowIcon}
						alt='Left arrow Icon'
					/>
				</Link>
				<Link to='/javascript/6.0' onClick={setProgress}>
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
						Chapter 5 Exam
					</h1>
					<p className='font-mono my-8'>
						Answer each of the practice questions below to the best of your
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
										} ${performance[index] === true ? 'bg-green-600' : ''}`}
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
							height='58vh'
							language='javascript'
							theme='vs-dark'
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

					<div className='bg-black h-52 p-2 border-2 border-solid border-slate-800'>
						<pre className='whitespace-pre-line'>{output}</pre>
					</div>
				</div>
			</div>
			{/* <div className='flex justify-center space-x-8 p-5 m-5'>
                <Link to='/javascript/1.1'>
                    <img className='bg-slate-400 hover:bg-gray-300 p-2' src={leftArrowIcon} alt='Left arrow Icon' />
                </Link>
                <Link to='/javascript/1.3'>
                    <img className='bg-slate-400 hover:bg-gray-300 p-2' src={rightArrowIcon} alt='Right arrow Icon' />
                </Link>
            </div> */}
			<Chatbot />
		</div>
	);
};

export default Examination5;
