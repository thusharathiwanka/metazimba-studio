import { useState, useEffect } from "react";

/**
 * Custom hook for track window dimensions
 * @returns {object} windowSize - object consists of width, height of the window object
 */
const useWindowDimensions = () => {
	const [windowSize, setWindowSize] = useState({
		width: "",
		height: "",
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};

export default useWindowDimensions;
