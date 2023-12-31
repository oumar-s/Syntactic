import { useState } from 'react';
import { Link } from 'react-router-dom'; 

import dropDownIcon from '../../../assets/icons/drop-down.png';

let allTopics = [];
export const EnrolledCourse = ({ name, syllabus, progress }) => {
	console.log('progress percent: ', progress);
	const courseName = name.toLowerCase();
	allTopics = syllabus;
	const numOfChapters = allTopics.length;

	const [isOpen, setIsOpen] = useState(false); // State to track accordion open/close
	const [topics, setTopics] = useState(allTopics);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};
	const toggleDropdown = (index) => {
		const newTopics = [...topics];
		newTopics[index].dropdown = !newTopics[index].dropdown;
		setTopics(newTopics);
	};

	return (
		<div className='enrolled-courses-wrap my-5'>
			<div
				className='enrolled-courses-item cursor-pointer bg-gallery border-2 border-black rounded-md p-5'
				onClick={toggleAccordion}
			>
				<div className='flex items-center'>
					<div className='flex flex-col items-start'>
						<h1 className='text-xl font-bold'>{name}</h1>
						<span className='enrolled-progress mt-2 font-mono text-gray-500'>
							Percent Completed
						</span>
						<div className='flex w-64 mt-2 bg-white  border border-gray-500 rounded-sm text-end'>
							<div
								className='enrolled-progress font-mon font-bold bg-green-500'
								style={{ width: `${progress.percent}%` }}
							>
								{`${Math.floor(progress.percent)}%`}
							</div>
						</div>
					</div>
					<div className='ml-auto'>
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
					</div>

					<ol className='list-decimal list-inside space-y-7'>
						{allTopics.map((topic, index) => (
							<li className='flex flex-col' key={index}>
								<div className='flex'>
									<div
										className={`rounded-full  text-white w-6 h-6 flex items-center justify-center mr-5 p-5 ${progress[index + 1] === 'complete'
												? 'bg-green-600'
												: 'bg-midnight'
											}`}
									>
										{index + 1}
									</div>
									<div
										className='flex items-center cursor-pointer'
										onClick={() => toggleDropdown(index)}
									>
										{topic.chapter}
										<img
											src={dropDownIcon}
											alt='Dropdown Icon'
											className={`w-6 h-6 ml-2 cursor-pointer ${topic.dropdown ? 'rotate-180' : ''
												}`}
										/>
									</div>
								</div>
								<div className=''>
									{topic.dropdown && (
										<div className='ml-20 mt-2 bg-opacity-50 bg-white rounded-md px-5 text-lg'>
											<ol className='list-disc space-y-7'>
												{topic.topics.map((subtopic) => (
													<li
														className={`transition-transform duration-300 ease-in-out hover:translate-x-2 ${progress[subtopic.pid] === 'complete'
																? 'text-green-600'
																: console.log('here: ', progress[subtopic.pid])
															} `}
													>
														<Link
															to={`/${courseName}/${subtopic.id}`}
															className={({ isActive }) =>
																isActive ? 'active-link' : ''
															}
														>
															{subtopic.name}
														</Link>
													</li>
												))}
											</ol>
										</div>
									)}
								</div>
							</li>
						))}
						<li className='flex flex-col'>
							<div className='flex'>
								<div className='rounded-full bg-midnight text-white w-6 h-6 flex items-center justify-center mr-5 p-5'>
									{numOfChapters + 1}
								</div>
								<div className='flex items-center'>
									<Link to={`/${courseName}/projects`}>Projects</Link>
								</div>
							</div>
						</li>
					</ol>
				</div>
			)}
		</div>
	);
};
