/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				'custom-1': '#6251dd',
				'custom-2': '#ef6b4a',
				'custom-3': '#f4f4ff',
				'custom-4': '#090937',
			},
			textColor: {
				'custom-1': '#6251dd',
				'custom-2': '#ef6b4a',
				'custom-3': '#f4f4ff',
				'custom-4': '#090937',
			},
			height: {
				'input-1': '60px'
			},
			borderColor: {
				'custom-1': '#6251dd',
			},
			outlineColor: {
				'custom-1': '#6251dd',
				'custom-2': '#ef6b4a',
			}
		},
	},
	plugins: [],
}
