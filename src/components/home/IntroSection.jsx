import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";

const IntroSection = () => {
	return (
		<section className="bg-intro-pattern bg-no-repeat md:pt-0 pt-20">
			<div className="container mx-auto">
				<div className="flex">
					<div className="info flex justify-center items-start flex-col">
						<h1 className="font-bold lg:text-8xl md:text-6xl text-4xl pb-12">
							<span className="text-meta-purple">Discover</span>&nbsp;
							<span className="text-meta-dark-gray">the World of Metaverse</span>
						</h1>
						<Link
							className="text-white py-4 bg-meta-purple px-8 flex items-center rounded-full"
							to="/"
						>
							<button className="pr-5 text-lg font-medium tracking-wider">Explore</button>
							<IoRocketOutline size={25} />
						</Link>
					</div>
					<div className="image">
						<img src="/images/intro-img.png" alt="intro" className="object-cover h-auto md:pr-10" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
