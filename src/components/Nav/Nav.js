// Import dependencies
import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

// Import assets
import dropdownIcon from '../../assets/icons/drop-down.png';
import menu from '../../assets/icons/menu.png';

// Import styles
import './nav.css';

export const Nav = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive(!isActive);
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
						<NavLink to='/login' className='mr-4 font-bold'>
							Log In
						</NavLink>
					</div>
				</div>

				<div className='menu-icon' onClick={toggleActive}>
					<img src={menu} alt='Menu Icon' className='h-12 w-12' />
				</div>
			</div>
		</nav>
	);
};
