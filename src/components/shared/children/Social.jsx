import {
	RiFacebookCircleFill,
	RiTwitterFill,
	RiInstagramLine,
	RiYoutubeFill,
} from "react-icons/ri";

export default function Social() {
	return (
		<div className="justify-center py-2 md:flex hidden">
			<div className="flex gap-6">
				<a href="https://facebook.com" rel="noopener noreferrer" target="_blank">
					<RiFacebookCircleFill size={20} />
				</a>
				<a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
					<RiTwitterFill size={20} />
				</a>
				<a href="https://instagram.com" rel="noopener noreferrer" target="_blank">
					<RiInstagramLine size={20} />
				</a>
				<a href="https://youtube.com" rel="noopener noreferrer" target="_blank">
					<RiYoutubeFill size={20} />
				</a>
			</div>
		</div>
	);
}
