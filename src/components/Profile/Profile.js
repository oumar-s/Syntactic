import React, { useState, useEffect } from 'react';
import { auth } from '../../config/firebaseConfig';
import icon from '../../assets/icons/user.png';

export const Profile = () => {
	document.title = 'Profile';

	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((currentUser) => {
			if (currentUser) {
				setUser(currentUser);
			} else {
				setUser(null); // User is not logged in
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<div className='profile-wrap w-4/5 sm:w-4/5 md:w-4/5 lg:w-2/4 m-auto mt-14'>
			<header className='flex items-center justify-between mb-6'>
				<h1 className='font-bold text-xl'>My Profile</h1>
				{/* <span className='cursor-pointer border border-midnight py-2 px-4 rounded-md hover:bg-midnight hover:text-white transition-all duration-200 ease-in-out'>
					Edit Profile
				</span> */}
			</header>
			<div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4'>
				<div className='left-container user-avatar rounded-lg p-6 border border-gray-300 w-full md:w-1/3 flex items-center justify-center'>
					<div className='avatar w-32 h-32 rounded-full bg-gray-200 '>
						<img
							src={user ? user.photoURL : icon}
							alt='avatar'
							className='w-full h-full object-cover rounded-full'
						/>
					</div>
				</div>

				<div className='right-container user-info rounded-lg p-6 border border-gray-300 w-full md:w-2/3'>
					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-600'>
							Name
						</label>
						<input
							type='text'
							className='mt-1 p-2 w-full rounded-md border border-gray-300'
							value={user ? user.displayName : 'No name'}
							readOnly
							disabled
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-600'>
							Email
						</label>
						<input
							type='text'
							className='mt-1 p-2 w-full rounded-md border border-gray-300'
							value={user ? user.email : 'No email'}
							readOnly
							disabled
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-600'>
							Phone
						</label>
						<input
							type='text'
							className='mt-1 p-2 w-full rounded-md border border-gray-300'
							value={user ? user.phoneNumber : 'No phone number'}
							readOnly
							disabled
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
