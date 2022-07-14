import { Link } from "react-router-dom";

/**
 * Navigation component
 * @param {boolean} props.isFooter - true if the component is in the footer false otherwise
 * @returns {JSX.Element} nav - Navigation component
 */
const Nav = ({ isFooter }) => {
	return (
		<nav>
			<ul
				className={`flex gap-8 font-medium text-meta-dark-gray flex-wrap justify-center ${
					isFooter ? `md:flex-row flex-col` : `flex-row`
				}`}
			>
				<li>
					<Link to="/">Marketplace</Link>
				</li>
				<li>
					<Link to="/">News</Link>
				</li>
				<li>
					<Link to="/">Gaming</Link>
				</li>
				<li>
					<Link to="/">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
