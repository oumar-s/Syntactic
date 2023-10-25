import React from 'react';

// import icon from assets
import checkIcon from '../../../assets/icons/check.png';

export const CourseIntro = () => {
	return (
		<div className='flex flex-col md:flex-row lg:items-center md:space-x-4 bg-white border border-midnight rounded-md p-4 mb-10'>
			<div className='course-intro-wrap flex-1 mb-4 '>
				<div className='course-intro-hero'>
					<h1 className='font-bold text-3xl mb-4'>Learn JavaScript</h1>
					<p className='w-80 mb-4'>
						Learn how to use JavaScript — a powerful and flexible programming
						language for adding website interactivity.
					</p>
					<button className='bg-neon-blue p-3 rounded-md text-white w-48'>
						Start
					</button>
				</div>
			</div>

			<div className='skills-list-wrap flex-1 md:flex md:items-center md:justify-center'>
				<ul className='list-none pl-0'>
					<li className='flex items-center mb-3'>
						<img className='w-5 mr-2' src={checkIcon} alt='Check Icon' />
						Build core programming concepts
					</li>
					<li className='flex items-center mb-3'>
						<img className='w-5 mr-2' src={checkIcon} alt='Check Icon' />
						Learn object-oriented concepts
					</li>
					<li className='flex items-center mb-3'>
						<img className='w-5 mr-2' src={checkIcon} alt='Check Icon' />
						Read and write JavaScript
					</li>
				</ul>
			</div>
		</div>
	);
};
