import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";

/**
 * Routes configuration
 * @returns {JSX.Element} Routes - All the routes
 */
const RoutesConfig = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default RoutesConfig;
