import { Link } from "react-router-dom";

export default function Nav({ isFooter }) {
	return (
		<div>
			<ul
				className={`flex gap-8 font-medium text-meta-dark-gray ${
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
		</div>
	);
}
