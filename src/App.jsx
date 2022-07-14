import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import RoutesConfig from "./routes/Routes";

const App = () => {
	useEffect(() => {
		AOS.init({ duration: 800, easing: "ease-in-out-quad" });
	});

	return <RoutesConfig />;
};

export default App;
