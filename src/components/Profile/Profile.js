export const Profile = () => {
	return (
		<div className='profile-wrap w-4/5 sm:w-4/5 md:w-4/5 lg:w-2/4 m-auto mt-14'>
			<header className='flex items-center justify-between mb-6'>
				<h1 className='font-bold text-xl'>My Profile</h1>
				<span className='cursor-pointer border border-midnight py-2 px-4 rounded-md hover:bg-midnight hover:text-white transition-all duration-200 ease-in-out'>
					Edit Profile
				</span>
			</header>
			<div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4'>
				<div className='left-container user-avatar rounded-lg p-6 border border-gray-300 w-full md:w-1/3 flex items-center justify-center'>
					<div className='avatar w-32 h-32 rounded-full bg-gray-200 '></div>
				</div>

				<div className='right-container user-info rounded-lg p-6 border border-gray-300 w-full md:w-2/3'>
					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-600'>
							Name
						</label>
						<input
							type='text'
							className='mt-1 p-2 w-full rounded-md border border-gray-300'
							value='User Name'
							readOnly
							disabled
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-600'>
							Email
						</label>
						<input
							type='email'
							className='mt-1 p-2 w-full rounded-md border border-gray-300'
							value='user@example.com'
							readOnly
							disabled
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-600'>
							Phone
						</label>
						<input
							type='tel'
							className='mt-1 p-2 w-full rounded-md border border-gray-300'
							value='123-456-7890'
							readOnly
							disabled
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
