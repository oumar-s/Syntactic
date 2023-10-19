import React from 'react';
import gIcon from '../../../assets/icons/icons8-google-30.png';
import { useState } from "react";
import { auth, googleProvider, githubProvider } from '../../../config/firebase-config';
import {signInWithPopup
} from 'firebase/auth';

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
			<button 
				type ='submit'
				onClick={signInWithGoogle}
				value='Login'
				className='w-half bg-neon-blue text-white p-3 rounded-md cursor-pointer'> 
				Sign In With Google
			</button>
			<br></br>
			<button
				type='submit'
				onClick = {signInWithGithub}
				value='Login'
				className='w-half bg-neon-blue text-white p-3 rounded-md cursor-pointer'> 
				Sign Up with Github
			</button>
		</div>
	);
};
