import React from 'react';
import { auth, db } from '../../../../config/firebaseConfig';
import { updateDoc, increment, doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom'; // Import NavLink
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const Promises = () => {
	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const data = (await getDoc(progressRef)).data();
			if (!data.Javascript['9:0']) {
				await updateDoc(progressRef, {
					'Javascript.9:0': 'complete',
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
				data.Javascript['9:0'] === 'complete' &&
				data.Javascript['9:1'] === 'complete' &&
				data.Javascript['9:2'] === 'complete' &&
				data.Javascript['9:3'] === 'complete'
			) {
				await updateDoc(progressRef, {
					'Javascript.9': 'complete',
				});
			}
		}
	};
	return (
		<div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/javascript/8.7'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/javascript/9.1' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					Promises
				</h1>

				<p className='font-mono my-8'>
					JavaScript is a powerful and versatile programming language used
					extensively in web development. One of its most important features is
					the use of asynchronous operations, such as fetching data from an
					external source, handling user input, or making network requests.
					Asynchronous tasks allow web applications to remain responsive and
					provide a smooth user experience.
				</p>

				<p className='font-mono my-8'>
					However, managing asynchronous code can quickly become complex and
					error-prone, leading to callback hell and hard-to-maintain code. This
					is where JavaScript Promises come to the rescue.
				</p>

				<p className='font-mono my-8'>
					Promises are a fundamental part of modern JavaScript, introduced to
					address the challenges of working with asynchronous operations. They
					provide a structured and more readable way to handle asynchronous
					tasks and ensure better control over the flow of your code. In this
					guide, we'll dive deep into the world of JavaScript Promises. We'll
					explore what promises are, how they work, and how to use them
					effectively to write clean, maintainable, and error-handling
					asynchronous code. Whether you're a beginner looking to grasp the
					basics or an experienced developer aiming to improve your async code,
					this guide will help you harness the power of JavaScript Promises to
					build robust and efficient web applications.
				</p>
			</div>
			<Chatbot />
		</div>
	);
};

export default Promises;
