import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";

import useWindowDimensions from "../../hooks/useDimensions";

const IntroSection = () => {
	const { width } = useWindowDimensions();

	return (
		<section className="lg:bg-intro-background bg-intro-pattern bg-no-repeat bg-cover bg-center md:pt-0 pt-20 md:px-0 px-10 lg:pb-64">
			<div className="container mx-auto">
				<div className="flex justify-start md:items-start items-center lg:flex-row flex-col">
					<div className="flex justify-center md:items-start items-center flex-col">
						{width >= 768 ? (
							<h1
								className="font-bold lg:text-8xl md:text-6xl text-4xl pb-12 pt-28"
								data-aos-delay="0"
								data-aos="fade-up-right"
							>
								<span className="text-meta-purple">Discover</span>&nbsp;
								<span className="text-meta-dark-gray">
									the <br /> World of <br /> Metaverse
								</span>
							</h1>
						) : (
							<h1
								className="font-bold lg:text-8xl md:text-6xl text-4xl pb-12 pt-28 text-center text-meta-dark-gray"
								data-aos-delay="0"
								data-aos="fade-up-right"
							>
								Discover the World of Metaverse
							</h1>
						)}
						<Link
							data-aos-delay="300"
							data-aos="fade"
							className="text-white py-4 bg-meta-purple px-8 flex items-center rounded-full md:mb-0 mb-10"
							to="/"
						>
							<button className="pr-5 text-lg font-medium tracking-wider">Explore</button>
							<IoRocketOutline size={25} />
						</Link>
					</div>
					<div className="w-full">
						<img
							src="/images/intro-img.png"
							alt="intro"
							className="img h-auto w-full lg:hidden sm:block hidden"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
