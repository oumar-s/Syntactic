import React from 'react';
import { useState } from "react";
import { auth, googleProvider } from '../../../config/firebase-config';
import { createUserWithEmailAndPassword, 
	currentUser,
	signInWithPopup,
	signOut 
} from 'firebase/auth';

export const Signup = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log(auth.currentUser);

	const signIn = async () => {
		try {
		  await createUserWithEmailAndPassword(auth, email, password);
		} catch (err) {
		  console.error(err);
		}
	  };

	const signInWithGoogle = async () => {
		try {
		  await signInWithPopup(auth, googleProvider);
		} catch (err) {
		  console.error(err);
		}
	  };

	return (
		<div className='form-wrap text-2xl w-9/12 '>
			<h1 className='mb-4'>Your gateway to endless learning starts here</h1>
			<form action='' className='text-lg font-mono font-normal'>
				<input
					//type='text'
					//name='email'
					//id='email'
					placeholder='Email'
					className='w-full p-2 mb-4 rounded-md'
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type='password'
					//name='password'
					//id='password'
					placeholder='Password'
					className='w-full p-2 mb-4 rounded-md'
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button
					//type='submit'
					//value='Sign Up'
					onClick={ signIn }
					className='w-full bg-neon-blue text-white p-3 rounded-md cursor-pointer'
					>
						Sign Up
				</button>
				<button onClick={signIn}> Sign In</button>

      			<button onClick={signInWithGoogle}> Sign In With Google</button>
			</form>
		</div>
	);
};