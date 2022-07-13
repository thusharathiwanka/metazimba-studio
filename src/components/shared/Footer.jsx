import { Link } from "react-router-dom";

import Nav from "./children/Nav";
import Social from "./children/Social";

const Footer = () => {
	return (
		<footer className="bg-footer-pattern bg-no-repeat bg-bottom md:pt-0 pt-20">
			<div className="container mx-auto md:px-0 px-10">
				<h1 className="pt-14 text-4xl pb-12 font-medium text-center text-meta-dark-gray">
					Subscribe to Newsletter
				</h1>
				<form className="flex flex-col justify-center items-center md:w-1/2 w-2/3 mx-auto">
					<input type="text" className="w-full py-3 px-8 outline-none rounded-full" />
					<button
						type="submit"
						className="text-white py-3 bg-meta-purple px-10 text-lg flex items-center rounded-full mt-5"
					>
						Subscribe
					</button>
				</form>
				<div className="pt-20 pb-10">
					<div className="flex justify-center items-center flex-wrap md:justify-between">
						<Link to="/">
							<img src="/images/logo.png" alt="logo-png" className="w-52 pb-4" />
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
