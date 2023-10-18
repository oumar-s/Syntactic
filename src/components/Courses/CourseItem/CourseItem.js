import { useState } from 'react';

// Import Icons
import jsIcon from '../../../assets/icons/js-icon.png';
import pythonIcon from '../../../assets/icons/python-icon.png';
import dropDownIcon from '../../../assets/icons/drop-down.png';

export const CourseItem = ({ name }) => {
	const [isOpen, setIsOpen] = useState(false); // State to track accordion open/close
	const [showAllTopics, setShowAllTopics] = useState(false); // State to track showing all topics

	const iconMap = {
		JavaScript: jsIcon,
		Python: pythonIcon,
	};

	const topics = [
		'Introduction to JavaScript',
		'Conditional Statements',
		'Loops',
		'Functions',
		'Arrays and Objects',
		'Strings',
		'Object Literals',
		'ES6 Classes',
		'Promises',
	];

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	const toggleShowAllTopics = () => {
		setShowAllTopics(!showAllTopics);
	};

	const displayedTopics = showAllTopics ? topics : topics.slice(0, 5);

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
					<div className='syllabus'>
						<h2 className='font-bold text-2xl mb-7'>Syllabus</h2>
						{/* <p className='text-gray-600 mb-5'>
							Our courses come with interactive lessons, real-world projects.
							Take your first step towards mastering a new skill or advancing in
							your career. Browse through our extensive catalog and find the
							course that's just right for you.
						</p> */}
					</div>

					<ol className='list-decimal list-inside space-y-7'>
						{displayedTopics.map((topic, index) => (
							<li className='flex items-center' key={index}>
								<div className='rounded-full bg-midnight text-white w-6 h-6 flex items-center justify-center mr-5 p-5'>
									{index + 1}
								</div>
								{topic}
							</li>
						))}
					</ol>

					<div className='flex justify-center mt-10'>
						<button
							className='btn text-neon-blue font-semibold'
							onClick={toggleShowAllTopics}
						>
							{showAllTopics ? 'Show Less Units' : 'Show All Units'}
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
