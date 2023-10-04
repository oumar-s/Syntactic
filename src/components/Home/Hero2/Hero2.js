import React from 'react';

import './Hero2.css';

export const Hero2 = () => {
	return (
		<div className='flex flex-wrap md:flex-nowrap p-4 font-ubuntu bg-midnight text-white'>
			{/* Image on the left */}
			<div className='w-full left md:w-1/2 flex flex-col justify-center p-6'>
				<h1 className='text-2xl md:text-4xl font-bold my-4'>
					Level up your skills
				</h1>
				<p className='font-mono my-2'>
					Step up your game with courses that challenge and inspire.
					<br />
					Choose from an array of courses to fit your learning style.
				</p>
				<button className='bg-yellow-400 w-44 text-black font-bold px-4 py-2 my-2 rounded-md'>
					Explore Courses
				</button>
			</div>

			{/* Header on the right */}
			<div className='right-hero-wrap p-6 w-48 h-w-48 md:w-7/12 md:h-96 relative'></div>
		</div>
	);
};
