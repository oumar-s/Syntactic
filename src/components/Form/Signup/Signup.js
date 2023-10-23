import React from 'react';
import googleIcon from '../../../assets/icons/google.png';
import githubIcon from '../../../assets/icons/github.png';
import { useState } from 'react';
import {
	auth,
	googleProvider,
	githubProvider,
} from '../../../config/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

export const Signup = () => {
	console.log(auth?.currentUser?.email);

	//signupwith google
	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			console.error(err);
		}
	};

	//signupwith google
	const signInWithGithub = async () => {
		try {
			await signInWithPopup(auth, githubProvider);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='form-wrap w-full '>
			<h1 className='mb-4 text-3xl'>Create an Account</h1>
			<p className='mb-4 text-lg font-normal text-gray-600'>
				Your gateway to endless learning starts here
			</p>
			{/* <form action='' className='text-lg font-mono font-normal'>
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
			</form> */}
			<div
				className='signup-google-wrap flex items-center text-lg	 border-2 border-midnight hover:bg-neon-blue hover:text-white transition duration-300 transform hover:scale-105 rounded-xl p-4 cursor-pointer my-4'
				onClick={signInWithGoogle}
			>
				<div className='signup-icon mr-4 '>
					<img className='w-8' src={googleIcon} alt='Google Icon' />
				</div>
				Sign Up With Google
			</div>
			<div
				className='signup-github-wrap flex items-center text-lg border-2 border-midnight hover:bg-neon-blue hover:text-white transition duration-300 transform hover:scale-105 rounded-xl p-4 cursor-pointer my-4'
				onClick={signInWithGithub}
			>
				<div className='signup-icon mr-4'>
					<img className='w-8' src={githubIcon} alt='Github Icon' />
				</div>
				Sign Up with Github
			</div>
		</div>
	);
};
