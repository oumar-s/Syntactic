import React from 'react';
import { Link } from 'react-router-dom'; 
import { auth, db } from '../../../../config/firebaseConfig';
import { updateDoc, increment, doc, getDoc } from 'firebase/firestore';
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const ConditionalStatements = () => {
	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const data = (await getDoc(progressRef)).data();
			if (!data.Javascript['2:0']) {
				await updateDoc(progressRef, {
					'Javascript.2:0': 'complete',
					'Javascript.percent': increment(2.4),
				});
			}

			if (
				data.Javascript['2:0'] === 'complete' &&
				data.Javascript['2:1'] === 'complete' &&
				data.Javascript['2:2'] === 'complete' &&
				data.Javascript['2:3'] === 'complete'
			) {
				await updateDoc(progressRef, {
					'Javascript.2': 'complete',
				});
			}
		}
	};

	return (
		<div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/javascript/1.3'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/javascript/2.1' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					Conditional Statements
				</h1>

				<p className='font-mono my-8'>
					In this chapter, we'll delve into the powerful world of conditional
					statements in JavaScript. Conditional statements are vital for
					decision-making in your programs, allowing you to execute different
					code blocks based on specific conditions. You'll find these statements
					immensely useful as you build interactive and dynamic applications.
				</p>
			</div>
			<Chatbot />
		</div>
	);
};

export default ConditionalStatements;
