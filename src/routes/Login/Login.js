import React from 'react';

export const Login = () => {
	document.title = 'Login';
	return (
		// <div className='courses-wrap bg-blue-200 sm:bg-green-200 md:bg-yellow-200 lg:bg-red-200 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4 m-auto mt-20'>
		<div className='courses-wrap w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4 m-auto mt-20'>
			<h1 className='font-bold text-center text-2xl mb-4'>
				Login to Syntactic
			</h1>

			<form action='' className='text-lg font-mono font-normal'>
				<input
					type='text'
					name='email'
					id='email'
					placeholder='Email'
					className='w-full p-2 mb-4 rounded-md'
					required
				/>
				<input
					type='text'
					name='password'
					id='password'
					placeholder='Password'
					className='w-full p-2 mb-4 rounded-md'
					required
				/>
				<input
					type='submit'
					value='Login'
					className='w-full bg-neon-blue text-white p-3 rounded-md cursor-pointer'
				/>
				<button className=' border-none text-sm mt-4 bg-transparent text-gray-500'>
					I forgot my password
				</button>
			</form>
		</div>
	);
};
