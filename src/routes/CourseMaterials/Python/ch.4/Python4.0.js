import React from 'react';
import { auth, db } from '../../../../config/firebaseConfig';
import { getDoc, updateDoc, increment, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom'; // Import NavLink
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const PythonIfElse = () => {
	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const progressSnap = await getDoc(progressRef);
			const data = progressSnap.data();
			if (!data.Python['4:0']) {
				await updateDoc(progressRef, {
					'Python.4:0': 'complete',
					'Python.percent': increment(2.71),
				});
			}
		}
	};
	return (
		<div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/python/3.3'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/python/4.1' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					Python Conditional Statements
				</h1>
				<p className='font-mono my-8'>
					Conditional statements are a fundamental concept in programming,
					allowing you to control the flow of your code based on specific
					conditions. In Python, if and else statements are key components for
					implementing logic and decision-making in your program.
				</p>

				<p className='font-mono my-8'>
					This chapter will cover If, Elif, and Else statements.
				</p>
			</div>
			<Chatbot />
		</div>
	);
};

export default PythonIfElse;
