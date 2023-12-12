import React from 'react';
import { Link } from 'react-router-dom'; // Import NavLink
import { auth, db } from '../../../../config/firebaseConfig';
import { updateDoc, increment, doc, getDoc } from 'firebase/firestore';
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const Functions = () => {
	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const data = (await getDoc(progressRef)).data();
			if (!data.Javascript['4:0']) {
				await updateDoc(progressRef, {
					'Javascript.4:0': 'complete',
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
				data.Javascript['4:0'] === 'complete' &&
				data.Javascript['4:1'] === 'complete' &&
				data.Javascript['4:2'] === 'complete'
			) {
				await updateDoc(progressRef, {
					'Javascript.3': 'complete',
				});
			}
		}
	};
	return (
		<div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/javascript/3.3'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/javascript/4.1' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					Functions
				</h1>

				<p className='font-mono my-8'>
					In this chapter, we'll unravel the power of functions in JavaScript.
					Functions are like reusable blocks of code that perform specific
					tasks. They allow you to break down your code into manageable parts,
					enhancing organization and reusability. Get ready to harness the true
					potential of functions!
				</p>

				<p className='font-mono my-8'>
					In the world of programming, functions play a pivotal role as the
					building blocks of any software application. They are essential for
					organizing, structuring, and simplifying code, making it more modular
					and maintainable. Functions are like self-contained units of logic
					that can be reused throughout your code, and they enable you to
					perform specific tasks with precision and efficiency.
				</p>

				<p className='font-mono my-8'>
					Functions are essential building blocks in JavaScript, serving various
					purposes:
					<br></br>Declaration: Learn how to declare functions, defining their
					names, parameters, and the code they execute.
					<br></br>Calling Functions: Discover how to call or invoke functions
					to execute their code.
					<br></br>Return Values: Understand how functions can return values,
					allowing you to capture and use the results.
					<br></br>Parameters and Arguments: Explore the concepts of function
					parameters and arguments, which enable you to pass data into functions
					for processing
				</p>
			</div>
			<Chatbot />
		</div>
	);
};

export default Functions;
