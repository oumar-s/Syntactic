import React from 'react';
import { auth, db } from '../../../../config/firebaseConfig';
import { getDoc, updateDoc, increment, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom'; 
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const PythonFunctions = () => {
	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const progressSnap = await getDoc(progressRef);
			const data = progressSnap.data();
			if (!data.Python['7:0']) {
				await updateDoc(progressRef, {
					'Python.7:0': 'complete',
					'Python.percent': increment(2.71),
				});
			}
		}
	};
	return (
		<div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/python/6.4'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/python/7.1' onClick={setProgress}>
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
					Functions are a fundamental concept in Python that allow you to
					encapsulate and reuse code. This guide covers everything you need to
					know about functions, from defining and calling them to more advanced
					topics.
				</p>
			</div>
			<Chatbot />
		</div>
	);
};

export default PythonFunctions;
