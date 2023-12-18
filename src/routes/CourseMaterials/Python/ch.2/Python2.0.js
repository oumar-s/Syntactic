import React from 'react';
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
import { Link } from 'react-router-dom'; 
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const PythonDataTypesAndVariablesIntroduction = () => {
	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const progressSnap = await getDoc(progressRef);
			const data = progressSnap.data();
			if (!data.Python['2:0']) {
				await updateDoc(progressRef, {
					'Python.2:0': 'complete',
					'Python.percent': increment(2.71),
				});
			}
		}
	};

	return (
		<div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/python/1.2'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/python/2.1' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					Python Data Types And Variables
				</h1>
				<p className='font-mono my-8'>
					Understanding Data Types and Variables in Python
				</p>

				<p className='font-mono my-8'>
					In Python, data types and variables are fundamental concepts that form
					the foundation of your programs. They allow you to store and
					manipulate data efficiently. In this section, we'll explore simple
					data types, how to work with variables, and some common operations
					associated with them.
				</p>

				<p className='font-mono my-8'>
					What are Data Types and Variables?
					<br></br> Data Types: Data types are categories used in programming to
					classify and specify the type of data a variable can hold. They define
					the kind of values that can be stored in a variable, such as numbers,
					text, or true/false values.
					<br></br> Variables: Variables are like containers used to store and
					manage data in a program. They are given names, and you can assign
					values to them. These values can be of different data types, depending
					on the variable's definition. Variables allow you to work with and
					manipulate data throughout your code.
				</p>
			</div>
			<Chatbot />
		</div>
	);
};

export default PythonDataTypesAndVariablesIntroduction;
