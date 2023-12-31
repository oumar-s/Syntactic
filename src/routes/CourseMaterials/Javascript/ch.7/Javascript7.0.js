import React from 'react';
import { auth, db } from '../../../../config/firebaseConfig';
import { updateDoc, increment, doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom'; 
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const ObjectLiterals = () => {
	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const data = (await getDoc(progressRef)).data();
			if (!data.Javascript['7:0']) {
				await updateDoc(progressRef, {
					'Javascript.7:0': 'complete',
					'Javascript.percent': increment(2.4),
				});
			}

			if (
				data.Javascript['7:0'] === 'complete' &&
				data.Javascript['7:1'] === 'complete' &&
				data.Javascript['7:2'] === 'complete' &&
				data.Javascript['7:3'] === 'complete' &&
				data.Javascript['7:4'] === 'complete' &&
				data.Javascript['7:5'] === 'complete' &&
				data.Javascript['7:6'] === 'complete'
			) {
				await updateDoc(progressRef, {
					'Javascript.7': 'complete',
				});
			}
		}
	};
	return (
		<div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/javascript/6.4'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/javascript/7.1' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					Objects Literals
				</h1>

				<p className='font-mono my-8'>
					In JavaScript, most things are objects, from core JavaScript features
					like arrays to the browser APIs built on top of JavaScript. You can
					even create your own objects to encapsulate related functions and
					variables into efficient packages and act as handy data containers.
					The object-based nature of JavaScript is important to understand if
					you want to go further with your knowledge of the language.
				</p>

				<p className='font-mono my-8'>
					An object is a collection of related data and/or functionality. These
					usually consist of several variables and functions (which are called
					properties and methods when they are inside objects).
				</p>
			</div>
			<Chatbot />
		</div>
	);
};

export default ObjectLiterals;
