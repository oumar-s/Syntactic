import React from 'react';
import { useState } from "react";
//import {Signup} from '../../components/Form/Signup/Signup';
import {auth, googleProvider} from '../../config/firebase-config';
import { signInWithEmailAndPassword,
	signInWithPopup,
	signOut 
} from 'firebase/auth';

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// this is for existing user loggin in to existing account
	const logIn = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.error(err);
		}
	};


	const logout = async () => {
		try {
		  await signOut(auth);
		} catch (err) {
		  console.error(err);
		}
	  };
	

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
					type='password'
					name='password'
					id='password'
					placeholder='Password'
					className='w-full p-2 mb-4 rounded-md'
					required
				/>
				<button
					type='submit'
					onClick = {logIn}
					value='Login'
					className='w-full bg-neon-blue text-white p-3 rounded-md cursor-pointer'
				> Log In
				</button>
				
				<button className=' border-none text-sm mt-4 bg-transparent text-gray-500'>
					I forgot my password
				</button>
			</form>
		</div>
	);
};
