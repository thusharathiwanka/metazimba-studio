import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<div>
			<ul className="flex gap-8 font-medium text-meta-dark-gray md:flex-row flex-col">
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
		</div>
	);
}
