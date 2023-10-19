import React from 'react';
import { useState } from "react";
//import {Signup} from '../../components/Form/Signup/Signup';
import {auth, googleProvider, githubProvider } from '../../config/firebase-config';
import { currentUser,
	signInWithPopup, 
} from 'firebase/auth';

export const Login = () => {
	
	//not gonna use below since not using createUserWithEmailAndPassword
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	console.log(auth?.currentUser?.email);

	// this is for existing user loggin in to existing account
	const logIn = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
		  } catch (err) {
			console.error(err);
		  }
	};	

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

	document.title = 'Login';
	return (
		// <div className='courses-wrap bg-blue-200 sm:bg-green-200 md:bg-yellow-200 lg:bg-red-200 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4 m-auto mt-20'>
		<div className='courses-wrap w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4 m-auto mt-20'>
			<h1 className='font-bold text-center text-2xl mb-4'>
				Login to Syntactic
			</h1>


			<button
				type='submit'
				onClick = {signInWithGoogle}
				value='Login'
				className='w-full bg-neon-blue text-white p-3 rounded-md cursor-pointer'
			> Log In with Google
			</button>

			<button
				type='submit'
				onClick = {signInWithGithub}
				value='Login'
				className='w-full bg-neon-blue text-white p-3 rounded-md cursor-pointer'
			> Log In with Github
			</button>

			
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
