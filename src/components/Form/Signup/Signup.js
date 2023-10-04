import React from 'react';

export const Signup = () => {
	return (
		<div className='form-wrap text-2xl w-9/12 '>
			<h1 className='mb-4'>Your gateway to endless learning starts here</h1>
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
					value='Sign Up'
					className='w-full bg-neon-blue text-white p-3 rounded-md cursor-pointer'
				/>
			</form>
		</div>
	);
};
