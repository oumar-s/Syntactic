import React, { useState } from 'react';
import dropdownIcon from '../../assets/icons/drop-down.png';
import menu from '../../assets/icons/menu.png';
import './nav.css';

export const Nav = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<nav className=' font-inconsolata text-lg bg-white border-b border-midnight w-full p-6'>
			<div
				className='container mx-auto flex items-center justify-between relative'
				style={{ maxWidth: '1800px' }}
			>
				<div className='logo absolute left-4 rounded-md uppercase font-bold border-2 border-midnight p-2 text-xl'>
					{`<s>`}
				</div>
				<div className='collapsible flex items-center justify-between w-full'>
					<div className=' m-auto text-center'>
						<ul
							className={`menu-ul flex justify-center space-x-10 ${
								isActive ? 'active' : ''
							}`}
						>
							<li>Home</li>
							<li className='relative inline-block'>
								Courses
								{/* <img
									src={dropdownIcon}
									alt='Dropdown Icon'
									className='absolute top-1/2 -right-5 transform -translate-y-1/2 h-4 w-4'
								/> */}
							</li>
							<li>About</li>
						</ul>
					</div>

					<div
						className={`account-cta absolute right-4 ${
							isActive ? 'active' : ''
						}`}
					>
						<a href='#' className='mr-4 font-bold'>
							Log In
						</a>
						{/* <a href='#' className='bg-black text-white px-4 py-2 rounded-md'>
							Join For Free
						</a> */}
					</div>
				</div>

				<div className='menu-icon' onClick={toggleActive}>
					<img src={menu} alt='Menu Icon' className='h-12 w-12' />
				</div>
			</div>
		</nav>
	);
};
