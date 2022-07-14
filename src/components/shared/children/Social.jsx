import {
	RiFacebookCircleFill,
	RiTwitterFill,
	RiInstagramLine,
	RiYoutubeFill,
} from "react-icons/ri";

/**
 * Social links component
 * @param {boolean} props.isFooter - true if the component is in the footer false otherwise
 * @returns {JSX.Element} div - Social links component
 */
const Social = ({ isFooter }) => {
	return (
		<div className={`justify-center py-2 ${!isFooter ? `lg:flex hidden` : `flex`}`}>
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
};

export default Social;
