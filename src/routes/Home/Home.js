import React from 'react';
import { Hero } from '../../components/Home/Hero/Hero';
import { Hero2 } from '../../components/Home/Hero2/Hero2';

export const Home = () => {
	document.title = 'Syntactic | Home';

	return (
		<>
			<Hero />
			<Hero2 />
		</>
	);
};
