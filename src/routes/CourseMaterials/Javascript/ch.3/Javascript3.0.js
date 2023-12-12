import React from 'react';
import { Link } from 'react-router-dom'; // Import NavLink
import { auth, db } from '../../../../config/firebaseConfig';
import { updateDoc, increment, doc, getDoc } from 'firebase/firestore';
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const Loops = () => {
	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const data = (await getDoc(progressRef)).data();
			if (!data.Javascript['3:0']) {
				await updateDoc(progressRef, {
					'Javascript.3:0': 'complete',
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
				data.Javascript['3:0'] === 'complete' &&
				data.Javascript['3:1'] === 'complete' &&
				data.Javascript['3:2'] === 'complete' &&
				data.Javascript['3:3'] === 'complete'
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
					<Link to='/javascript/2.3'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/javascript/3.1' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					Loops
				</h1>

				<p className='font-mono my-8'>
					In this chapter, we'll explore the fascinating world of loops in
					JavaScript. Loops are essential for automating repetitive tasks,
					iterating through data, and controlling the flow of your programs.
					We'll introduce you to two common types of loops: while loops and for
					loops. Get ready to unlock the power of iteration!
				</p>

				<p className='font-mono my-8'>
					Loops are used when you need to perform a specific action repeatedly.
					They allow you to execute a block of code multiple times. We'll cover:
					<br></br>while Loops: Learn how to use while loops to execute code as
					long as a specified condition is true.
					<br></br>for Loops: Explore the versatile for loops, ideal for
					iterating through data structures like arrays and defining precise
					loops with initialization, condition, and iteration expressions.
				</p>
			</div>
			<Chatbot />
		</div>
	);
};

export default Loops;
