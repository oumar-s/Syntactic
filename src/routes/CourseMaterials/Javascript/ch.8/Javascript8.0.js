import React from 'react';
import { auth, db } from '../../../../config/firebaseConfig';
import { updateDoc, increment, doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom'; 
import leftArrowIcon from '../../../../assets/icons/angle-left.png';
import rightArrowIcon from '../../../../assets/icons/angle-right.png';
import Chatbot from '../../../../components/Chatbot/Chatbot';

const ES6Classes = () => {
	const setProgress = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const progressRef = doc(db, 'progress', `${currentUser.uid}`);
			const data = (await getDoc(progressRef)).data();
			if (!data.Javascript['8:0']) {
				await updateDoc(progressRef, {
					'Javascript.8:0': 'complete',
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
				data.Javascript['8:0'] === 'complete' &&
				data.Javascript['8:1'] === 'complete' &&
				data.Javascript['8:2'] === 'complete' &&
				data.Javascript['8:3'] === 'complete' &&
				data.Javascript['8:4'] === 'complete' &&
				data.Javascript['8:5'] === 'complete' &&
				data.Javascript['8:6'] === 'complete' &&
				data.Javascript['8:7'] === 'complete'
			) {
				await updateDoc(progressRef, {
					'Javascript.8': 'complete',
				});
			}
		}
	};

	return (
		<div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
			<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
				<div className='flex justify-center space-x-8 p-5 m-5'>
					<Link to='/javascript/7.6'>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={leftArrowIcon}
							alt='Left arrow Icon'
						/>
					</Link>
					<Link to='/javascript/8.1' onClick={setProgress}>
						<img
							className='bg-slate-400 hover:bg-gray-300 p-2'
							src={rightArrowIcon}
							alt='Right arrow Icon'
						/>
					</Link>
				</div>
				<h1 className='text-2xl md:text-4xl font-bold my-4 bg-slate-700 p-4'>
					ES6 Classes
				</h1>

				<p className='font-mono my-8'>
					JavaScript is a prototype-based language — an object's behaviors are
					specified by its own properties and its prototype's properties.
					However, with the addition of classes, the creation of hierarchies of
					objects and the inheritance of properties and their values are much
					more in line with other object-oriented languages such as Java. In
					this section, we will demonstrate how objects can be created from
					classes.
				</p>

				<p className='font-mono my-8'>
					In many other languages, classes, or constructors, are clearly
					distinguished from objects, or instances. In JavaScript, classes are
					mainly an abstraction over the existing prototypical inheritance
					mechanism — all patterns are convertible to prototype-based
					inheritance. Classes themselves are normal JavaScript values as well,
					and have their own prototype chains. In fact, most plain JavaScript
					functions can be used as constructors — you use the new operator with
					a constructor function to create a new object.
				</p>
			</div>
			<Chatbot />
		</div>
	);
};

export default ES6Classes;
