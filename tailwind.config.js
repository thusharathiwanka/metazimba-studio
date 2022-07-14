/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"meta-gray": "#F3F1F6",
				"meta-dark-gray": "#1A232E",
				"meta-purple": "#6A55EA",
				"meta-light-purple": "#F7E6F8",
				"meta-orange": "#F8F0E6",
				"meta-dark-orange": "#FAB155",
				"meta-blue": "#E7F0F0",
				"meta-dark-blue": "#4BC8C8",
				"meta-red": "#F7DEDE",
				"meta-dark-red": "#DF535A",
			},
			backgroundImage: {
				"intro-pattern": "url('/public/images/intro-metaverse.png')",
				"intro-background": "url('/public/images/intro-background.png')",
				"footer-pattern": "url('/public/images/footer-metaverse.png')",
			},
		},
	},
	plugins: [],
};
