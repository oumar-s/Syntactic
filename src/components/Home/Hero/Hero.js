import React from 'react';

import './Hero.css';
import { Signup } from '../../../components/Form/Signup/Signup';

export const Hero = () => {
	return (
		<div className='flex flex-wrap md:flex-nowrap font-ubuntu'>
			{/* Image on the left */}
			<div className='w-full left left-bg md:w-1/2 flex justify-center items-center p-6'>
				{/* <div className='text-overlay bg-gallery p-6 font-bold left-0 top-1/2 -translate-y-1/2 text-2xl'> */}
				<div className='left-hero-wrap p-6 w-48 h-w-48 md:w-7/12 md:h-96 relative'>
					<div className='w-6/12'>
						<h1 className=' bg-gallery font-bold text-2xl uppercase'>
							Your Course to Success
						</h1>
						<div className='flex items-center bg-black text-gallery mt-2 mb-2'>
							<span className='mr-2 text-3xl pl-2'>+</span>
							<p className='font-bold'>
								Elevate Your Skills, One Step at a Time
							</p>
						</div>
						<div className='flex items-center bg-black text-gallery mt-2 mb-2'>
							<span className='mr-2 text-3xl pl-2'>+</span>
							<p className='font-bold'>Climb Higher, Achieve More</p>
						</div>
					</div>
				</div>

				{/* <img src={goalImg} alt='Goal' className='w-48 h-w-48 md:w-96 md:h-96' /> */}
			</div>

			{/* Header on the right */}
			<div className='w-full right md:w-1/2 flex justify-center items-center p-6'>
				<h1 className='text-2xl md:text-4xl font-bold'>
					<Signup />
				</h1>
			</div>
		</div>
	);
};
