import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

/**
 * Common layout component to use header and footer
 * @param {object} children - Children props
 * @returns {ReactFragment} Fragment - Common layout with header and footer
 */
const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
