import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";

import Nav from "./children/Nav";
import Social from "./children/Social";

/**
 * Header component
 * @returns {JSX.Element} header - Header component
 */
const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header
			className="w-full top-0 left-0 md:relative fixed bg-meta-gray z-10 md:px-0 px-10 py-4"
			data-aos-delay="300"
			data-aos="fade-down"
		>
			<div className="container mx-auto flex items-center justify-between py-4">
				<Link to="/">
					<img src="/images/logo.png" alt="logo-png" className="w-52" />
				</Link>
				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
				>
					{open ? <CgClose /> : <CgMenuRight />}
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-meta-gray md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-16 pt-10 pl-12" : "top-[-490px]"
					}`}
				>
					<Nav />
				</ul>
				<Social />
			</div>
		</header>
	);
};

export default Header;
