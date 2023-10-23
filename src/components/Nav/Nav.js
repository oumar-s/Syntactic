// Import dependencies
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

import { auth } from '../../config/firebaseConfig';
import { signOut } from 'firebase/auth';

// Import assets
import dropdownIcon from '../../assets/icons/drop-down.png';
import menu from '../../assets/icons/menu.png';

// Import styles
import './nav.css';

export const Nav = () => {
	const [isActive, setIsActive] = useState(false);
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setIsUserLoggedIn(true);
				console.log('displayName from Nav:', user.displayName);
				setIsDropdownVisible(false); // Reset the dropdown visibility
			} else {
				setIsUserLoggedIn(false);
			}
		});

		return () => unsubscribe();
	}, []);

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	const logout = async () => {
		try {

			await signOut(auth);
			setIsDropdownVisible(false); // Reset the dropdown visibility
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<nav className='font-inconsolata text-lg bg-white border-b border-midnight w-full p-6'>
			<div
				className='container mx-auto flex items-center justify-between relative'
				style={{ maxWidth: '1800px' }}
			>
				<div className='logo absolute left-4 rounded-md uppercase font-bold border-2 border-midnight p-2 text-xl'>
					{`<s>`}
				</div>
				<div className='collapsible flex items-center justify-between w-full'>
					<div className='m-auto text-center'>
						<ul
							className={`menu-ul flex justify-center space-x-10 ${
								isActive ? 'active' : ''
							}`}
						>
							<li>
								<NavLink
									to='/'
									className={({ isActive }) => (isActive ? 'active-link' : '')}
								>
									Home
								</NavLink>
							</li>{' '}
							{/* Updated */}
							<li className='relative inline-block'>
								<NavLink
									to='/courses'
									className={({ isActive }) => (isActive ? 'active-link' : '')}
								>
									Courses
								</NavLink>
							</li>{' '}
							{/* Updated */}
							<li>
								<NavLink
									to='/about'
									className={({ isActive }) => (isActive ? 'active-link' : '')}
								>
									About
								</NavLink>
							</li>{' '}
							{/* Updated */}
						</ul>
					</div>

					<div
						className={`account-cta absolute right-4 ${
							isActive ? 'active' : ''
						}`}
					>
						{isUserLoggedIn ? (
							<>
								<div
									className='user-icon cursor-pointer rounded-full bg-midnight w-12 h-12 flex justify-center items-center text-white font-bold'
									onClick={() => setIsDropdownVisible(!isDropdownVisible)}
								>
									U
								</div>
								{isDropdownVisible && (
									<div className='dropdown-menu absolute w-36 top-20 right-0 bg-white rounded-md shadow-md border border-midnight p-5'>
										<ul className='dropdown-ul'>
											<li className='dropdown-li mb-4 transition duration-200 hover:text-neon-blue'>
												<NavLink
													to='/profile'
													className='dropdown-link'
													activeClassName='active-link'
												>
													Profile
												</NavLink>
											</li>
											<hr className='my-3' />
											<li className='dropdown-li transition duration-200 hover:text-neon-blue'>
												<NavLink to='/login' onClick={logout}>
													Log Out
												</NavLink>
											</li>
										</ul>
									</div>
								)}
							</>
						) : (
							<NavLink to='/login' className='mr-4 font-bold'>
								Log In
							</NavLink>
						)}
					</div>
				</div>

				<div className='menu-icon' onClick={toggleActive}>
					<img src={menu} alt='Menu Icon' className='h-12 w-12' />
				</div>
			</div>
		</nav>
	);
};
