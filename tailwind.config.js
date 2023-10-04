/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				midnight: '#222c3c',
				gallery: '#efefef',
				'neon-blue': '#4a3ef4',
			},
			fontFamily: {
				mooli: ["'Mooli'", 'sans-serif'],
				inconsolata: ['Inconsolata', 'monospace'],
				cabin: ['Cabin', 'sans-serif'],
				ubuntu: ['Ubuntu', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
