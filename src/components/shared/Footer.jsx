import { Link } from "react-router-dom";

import Nav from "./children/Nav";
import Social from "./children/Social";

/**
 * Footer component
 * @returns {JSX.Element} footer - Footer component
 */
const Footer = () => {
	return (
		<footer className="bg-footer-pattern bg-no-repeat bg-bottom pt-5">
			<div className="container mx-auto md:px-0 px-10">
				<h1
					className="pt-14 text-4xl pb-12 font-medium text-center text-meta-dark-gray"
					data-aos-delay="0"
					data-aos="fade-up"
				>
					Subscribe to Newsletter
				</h1>
				<form
					className="flex flex-col justify-center items-center md:w-1/2 w-2/3 mx-auto"
					data-aos-delay="100"
					data-aos="fade-up"
				>
					<input
						type="text"
						className="w-full py-3 px-8 outline-none rounded-full shadow"
						placeholder="Enter your email here..."
					/>
					<button
						type="submit"
						className="text-white py-3 bg-meta-purple px-10 text-lg flex items-center rounded-full mt-5"
					>
						Subscribe
					</button>
				</form>
				<div className="pt-20 pb-10" data-aos-delay="200" data-aos="fade-up">
					<div className="flex justify-center items-center flex-wrap md:justify-between">
						<Link to="/">
							<img src="/images/logo.png" alt="logo-png" className="w-52 pr-5" />
						</Link>
						<Social isFooter />
					</div>
					<div className="flex justify-center items-center mt-10 flex-wrap md:justify-between">
						<Nav />
						<p className="pt-4">Copyright &copy; 2022 All rights reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
