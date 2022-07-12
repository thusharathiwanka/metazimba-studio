import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<div>
			<ul className="flex gap-8 font-medium">
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
