import FeedbackSort from './FeedbackComponent/FeedbackSort';
import TempFeedback from './FeedbackComponent/TempFeedback';
//Import Dependencies
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../config/firebaseConfig';
import {
	getDoc,
	collection,
	setDoc,
	deleteDoc,
	updateDoc,
	doc,
} from 'firebase/firestore';

function Feedback() {
	document.title = 'My Feedbacks';

	const [feedbacks, setFeedbacks] = useState([]);
	const [userUID, setUserUID] = useState(null);

	useEffect(() => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			// Access the user's UID.
			setUserUID(currentUser.uid);
			const fetchData = async () => {
				try {
					const docRef = doc(db, 'course_feedbacks', `${userUID}`);
					const docSnap = await getDoc(docRef);
					if (docSnap.exists()) {
						console.log(
							'Document Data (course_feedbacks):',
							docSnap.data().feedbacks,
						);
						setFeedbacks(docSnap.data().feedbacks);
					} else {
						// doc.data() will be undefined in this case
						console.log('No such document!');
					}
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			};

			fetchData();
		}
	}, [userUID]);

	//let userFeedbackArray = [['JavaScript','Random1', 1], ['Python','Random2', 2], ['JavaScript','Random3', 3], ['JavaScript','Random4', 4], ['Python','Random5',5]];
	return (
		<>
			{feedbacks.length > 0 ? (
				<div className='flex flex-col p-5 pb-64 font-ubuntu bg-midnight text-white'>
					<div className='justify-items-center ml-20 mr-20 pl-20 pr-20'>
						<h1 className='text-2xl md:text-4xl font-bold my-4 mb-5 p-4'>
							Feedbacks
						</h1>
						{feedbacks.map((feedback) => (
							<TempFeedback feedback={feedback} />
						))}
					</div>
				</div>
			) : (
				<div className='mt-28 font-ubuntu bg-gallery'>
					<div className='flex justify-center'>
						<h1 className='text-5xl font-bold'>No Feedbacks</h1>
					</div>
				</div>
			)}
		</>
	);
}

export default Feedback;
