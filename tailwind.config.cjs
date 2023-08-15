/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', 'sans-serif'],
				display: ['Manrope Variable', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
