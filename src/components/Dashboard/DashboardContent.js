//Import Components
import { EnrolledCourse } from '../Courses/EnrolledCourse/EnrolledCourse';

//Import Dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../../config/firebaseConfig';
import {
	getDoc,
	setDoc,
	doc,
} from 'firebase/firestore';

export const DashboardContent = () => {
	const [enrolledCourses, setEnrolledCourses] = useState([]);
	const [nextTopicToReview, setNextTopicToReview] = useState({ topic: 'none' });
	const [progress, setProgress] = useState({});

	const [userUID, setUserUID] = useState(null);
	useEffect(() => {
		const currentUser = auth.currentUser;

		if (currentUser) {
			console.log('Dashboard USER:', currentUser);
			// Access the user's UID.
			setUserUID(currentUser.uid);
			// Reference to the user's document in the "enrollments" collection.
			const fetchEnrollmentData = async () => {
				try {
					const docRef = doc(db, 'enrollment', `${userUID}`);
					const docSnap = await getDoc(docRef);
					if (docSnap.exists()) {
						console.log(
							'Document Data (Enrollment):',
							docSnap.data().enrollments,
						);
						setEnrolledCourses(docSnap.data().enrollments);
					} else {
						console.log('No such document!');
					}
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			};
			const fetchNextTopicToReview = async () => {
				const docRef = doc(db, 'reviews', `${currentUser.uid}`);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					//get next topic to review
					console.log('test1');
					setNextTopicToReview(docSnap.data().Javascript?.next);
				} else {
					await setDoc(docRef, {
						Javascript: {
							box1: [],
							box2: [],
							box3: [],
							current: 0,
							next: { topic: 'none' },
						},
					});
				}
			};

			const fetchData = async () => {
				const progressRef = doc(db, 'progress', `${auth.currentUser.uid}`);
				const progressSnap = await getDoc(progressRef);
				if (progressSnap.exists()) {
					setProgress(progressSnap.data());
				} else {
					await setDoc(progressRef, {
						Javascript: {},
						Python: {},
					});
				}
			};

			fetchData();
			fetchEnrollmentData();
			fetchNextTopicToReview();
		}
	}, [userUID]);

	return (
		// Review and feedback
		<>
			<div className='flex flex-col gap-8 my-8 sm:flex-row h-72 w-4/5 sm:w-4/5 md:w-4/5 lg:w-3/4 m-auto'>
				<div class='sm:flex-1 bg-white shadow-sm rounded-md p-4'>
					<h2 className='text-xl font-bold inline'> Personalized Feedback </h2>
					<p class='mt-4'> We've kept a list of all your feedbacks. </p>
					<div className='flex flex-row place-content-between items-center'>
						<Link to='/feedbacks'>
							<button className='mt-36 bg-yellow-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded'>
								{' '}
								Feedbacks{' '}
							</button>
						</Link>
					</div>
				</div>

				<div className='sm:flex-1 bg-white shadow-sm rounded-md p-4'>
					<h2 className='text-xl font-bold'> Personalized Review </h2>
					{nextTopicToReview?.topic === 'none' ? (
						<p className='mt-4'>You have no topics to review</p>
					) : (
						<>
							<p className='mt-4'>
								<strong>Topic:</strong> {nextTopicToReview?.topic}
							</p>
							<div className='mt-4 h-24 overflow-hidden '>
								<strong>Problem:</strong> {nextTopicToReview?.practice}
							</div>
							<div className='flex flex-row place-content-between items-center'>
								<Link to={'/review/' + nextTopicToReview?.id}>
									<button className='mt-8 bg-yellow-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded'>
										Review
									</button>
								</Link>
							</div>
						</>
					)}
				</div>
			</div>

			<div className='bg-white shadow-sm p-4 rounded-md w-4/5 sm:w-4/5 md:w-4/5 lg:w-3/4 m-auto mt-14'>
				<h2 className='text-xl font-bold'>Your Courses</h2>
				{enrolledCourses.length ? (
					enrolledCourses.map((course, id) => (
						<EnrolledCourse
							key={id}
							id={userUID}
							name={course.title}
							syllabus={course.syllabus}
							progress={progress[course.title]}
						/>
					))
				) : (
					<p> You have not enrolled in any courses yet. </p>
				)}
			</div>
		</>
	);
};
