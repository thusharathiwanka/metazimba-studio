/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"meta-gray": "#F3F1F6",
				"meta-dark-gray": "#1A232E",
				"meta-purple": "#6A55EA",
			},
			backgroundImage: {
				"intro-pattern": "url('/public/images/intro-metaverse.png')",
			},
		},
	},
	plugins: [],
};
