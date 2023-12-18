import { useNavigate } from 'react-router-dom';

import {
	auth,
	googleProvider,
	githubProvider,
} from '../../config/firebaseConfig';

import googleIcon from '../../assets/icons/google.png';
import githubIcon from '../../assets/icons/github.png';

import { signInWithPopup } from 'firebase/auth';

export const Login = () => {
	const navigate = useNavigate();
	// sign in with google
	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
			navigate('/dashboard');
		} catch (err) {
			console.error(err);
		}
	};

	// sign in with github
	const signInWithGithub = async () => {
		try {
			await signInWithPopup(auth, githubProvider);
			navigate('/dashboard');
		} catch (err) {
			console.error(err);
		}
	};

	document.title = 'Login';
	return (
		<div className='courses-wrap w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4 m-auto mt-20'>
			<h1 className='font-bold text-center text-2xl mb-4'>
				Sign In to Continue
			</h1>

			<div
				className='signup-google-wrap flex items-center text-lg border-2 border-midnight hover:bg-neon-blue hover:text-white transition duration-300 transform hover:scale-105 rounded-xl p-4 cursor-pointer my-4'
				onClick={signInWithGoogle}
			>
				<div className='signup-icon mr-4'>
					<img className='w-8' src={googleIcon} alt='Google Icon' />
				</div>
				Sign In With Google
			</div>
			<div
				className='signup-github-wrap flex items-center text-lg border-2 border-midnight hover:bg-neon-blue hover:text-white transition duration-300 transform hover:scale-105 rounded-xl p-4 cursor-pointer my-4'
				onClick={signInWithGithub}
			>
				<div className='signup-icon mr-4'>
					<img className='w-8' src={githubIcon} alt='Github Icon' />
				</div>
				Sign In with Github
			</div>
		</div>
	);
};
