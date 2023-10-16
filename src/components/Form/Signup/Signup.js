import React from 'react';
import gIcon from '../../../assets/icons/icons8-google-30.png';
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
	//console.log(auth?.currentUser?.email);


	// this is for new Users setting up new account
	const signUp = async () => {
		try {
		  await createUserWithEmailAndPassword(auth, email, password);
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
			
					onClick={ signUp }
					className='w-half bg-neon-blue text-white p-3 rounded-md cursor-pointer'
					>
						Sign Up
				</button>
				<button onClick={signUp}> </button>

      			<button onClick={signInWithGoogle}
				className='w-half bg-neon-blue text-white p-3 rounded-md cursor-pointer'> Sign In With Google</button>
			</form>
		</div>
	);
};



 // this is for new Users setting up new account with Googel account
	//   const logIn = async () => {
	// 	try {
	// 		await signInWithEmailAndPassword(auth, email, password)
	// 		// .then((userCredential) => {
	// 		// 	const user = userCredential.user;
	// 		// })
	// 		.catch((error) => {
	// 			const errorCode = error.code;
	// 			const errorMessage = error.message;
	// 		});

	// 	}
	//   }