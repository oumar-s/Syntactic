import { useState, useEffect } from 'react';

import { auth, db } from '../../../config/firebaseConfig';
import {
	setDoc,
	collection,
	addDoc,
	arrayUnion,
	updateDoc,
	doc,
	Firestore,
	getDoc,
} from 'firebase/firestore';
import { OpenAI } from 'openai';

// Import Icons
import jsIcon from '../../../assets/icons/js-icon.png';
import pythonIcon from '../../../assets/icons/python-icon.png';
import dropDownIcon from '../../../assets/icons/drop-down.png';

const openai = new OpenAI({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

export const CourseItem = ({ name, syllabus }) => {
	const [isOpen, setIsOpen] = useState(false); // State to track accordion open/close
	const [showAllChapters, setShowAllChapters] = useState(false); // State to track showing all topics

	const iconMap = {
		Javascript: jsIcon,
		Python: pythonIcon,
	};

	const chapters = syllabus;

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	const toggleShowAllTopics = () => {
		setShowAllChapters(!showAllChapters);
	};

	const displayedChapters = showAllChapters ? chapters : chapters.slice(0, 5);

	const [isEnrolled, setIsEnrolled] = useState(false);

	const handleEnroll = async () => {
		const currentUser = auth.currentUser;
		if (currentUser) {
			const docRef = doc(db, 'enrollment', `${currentUser.uid}`);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				updateDoc(docRef, {
					enrollments: arrayUnion({ title: name, syllabus: syllabus }),
				});
			} else {
				await setDoc(docRef, {
					enrollments: [{ title: name, syllabus: syllabus }],
				});
				setIsEnrolled(true);
			}
		}
	};

	useEffect(() => {
		const checkEnrollment = async () => {
			const currentUser = auth.currentUser;
			if (currentUser) {
				const docRef = doc(db, 'enrollment', `${currentUser.uid}`);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					const data = docSnap.data();
					const isUserEnrolled = data.enrollments.some(
						(course) => course.title === name,
					);
					setIsEnrolled(isUserEnrolled);
				}
			}
		};

		checkEnrollment();
	}, [name]);

	return (
		<div className='course-item-wrap my-5'>
			<div
				className='course-item cursor-pointer bg-midnight border-2 border-black text-white rounded-md p-3'
				onClick={toggleAccordion}
			>
				<div className='flex items-center'>
					<div className='course-icon w-12 h-12'>
						<img src={iconMap[name]} alt={name} className='invert' />
					</div>
					<h1 className='ml-4 text-xl'>{name}</h1>
					<div className='ml-auto invert'>
						<img
							src={dropDownIcon}
							alt='Dropdown Icon'
							className={`w-6 h-6 ${isOpen ? 'rotate-180' : ''}`}
						/>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className='accordion-content mt-2 bg-opacity-50 bg-white border border-midnight rounded-md px-5 py-10 text-lg'>
					<div className='syllabus flex justify-between items-center mb-7'>
						<h2 className='font-bold text-2xl'>Syllabus</h2>
						<button
							className='enroll-button bg-our-yellow hover:bg-[#e6b00f] transition duration-300 ease-in-out font-bold rounded-md px-5 py-3'
							onClick={
								isEnrolled
									? () => (window.location.href = '/javascript/1.0')
									: handleEnroll
							}
						>
							{isEnrolled ? 'Go to Course' : 'Enroll'}
						</button>
					</div>

					<ol className='list-decimal list-inside space-y-7'>
						{displayedChapters.map((chapter, index) => (
							<li className='flex items-center' key={index}>
								<div className='rounded-full bg-midnight text-white w-6 h-6 flex items-center justify-center mr-5 p-5'>
									{index + 1}
								</div>
								{chapter.chapter}
							</li>
						))}
						{showAllChapters && (
							<li className='flex items-center' key={chapters.length + 1}>
								<div className='rounded-full bg-midnight text-white w-6 h-6 flex items-center justify-center mr-5 p-5'>
									{chapters.length + 1}
								</div>
								Projects
							</li>
						)}
					</ol>

					<div className='flex justify-center mt-10'>
						<button
							className='btn text-neon-blue font-semibold'
							onClick={toggleShowAllTopics}
						>
							{showAllChapters ? 'Show Less Chapters' : 'Show All Chapters'}
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
