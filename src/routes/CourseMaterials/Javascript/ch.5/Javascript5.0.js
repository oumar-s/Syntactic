import React from 'react';
import { auth, db } from '../../../../config/firebaseConfig';
import { updateDoc, increment, doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom'; 
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const Arrays = () => {
	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const data = (await getDoc(progressRef)).data();
			if (!data.Javascript['5:0']) {
				await updateDoc(progressRef, {
					'Javascript.5:0': 'complete',
					'Javascript.percent': increment(2.4),
				});
			}			

			if (
				data.Javascript['5:0'] === 'complete' &&
				data.Javascript['5:1'] === 'complete' &&
				data.Javascript['5:2'] === 'complete' &&
				data.Javascript['5:4'] === 'complete'
			) {
				await updateDoc(progressRef, {
					'Javascript.5': 'complete',
				});
			}
		}
	};
	return (
		<div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/javascript/4.2'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/javascript/5.1' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					Arrays
				</h1>

				<p className='font-mono my-8'>
					In this chapter, we'll explore JavaScript arrays, versatile data
					structures that allow you to store and manage collections of values.
					Arrays are fundamental to many programming tasks, and mastering them
					is key to becoming a proficient JavaScript programmer.
				</p>
			</div>
			<Chatbot />
		</div>
	);
};

export default Arrays;
