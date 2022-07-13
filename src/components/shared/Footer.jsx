import { Link } from "react-router-dom";

import Nav from "./children/Nav";
import Social from "./children/Social";

const Footer = () => {
	return (
		<section className="bg-footer-pattern bg-no-repeat md:pt-0 pt-20">
			<div className="container mx-auto">
				<h1 className="pt-14 text-4xl pb-12 font-medium text-center text-meta-dark-gray">
					Subscribe to Newsletter
				</h1>
				<form className="flex flex-col justify-center items-center w-1/2 mx-auto">
					<input type="text" className="w-full py-3 px-8 outline-none rounded-full" />
					<button
						type="submit"
						className="text-white py-3 bg-meta-purple px-10 text-lg flex items-center rounded-full mt-5"
					>
						Subscribe
					</button>
				</form>
				<div className="py-20">
					<div className="flex justify-between items-center">
						<Link to="/">
							<img src="/images/logo.png" alt="logo-png" className="w-52" />
						</Link>
						<Social />
					</div>
					<div className="flex justify-between items-center mt-10">
						<Nav />
						<p>Copyright &copy; 2022 All rights reserved</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
