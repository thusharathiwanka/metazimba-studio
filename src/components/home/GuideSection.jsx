import { guidelines } from "../../lib/data";
import Guideline from "./children/Guideline";

/**
 * Guide section component
 * @returns {JSX.Element} section - Guideline component
 */
const GuideSection = () => {
	return (
		<section className="md:pt-40 md:pb-28 py-10 relative px-10">
			<img
				src="/images/guidelines-right-stars.png"
				alt="right-astroid"
				className="absolute left-10 bottom-0 z-[-10] md:flex hidden"
			/>
			<img
				src="/images/guidelines-left-astroid.png"
				alt="left-astroid"
				className="absolute right-10 bottom-0 z-[-10] lg:flex hidden"
			/>
			<div className="container mx-auto">
				<div className="flex justify-center gap-20 md:flex-nowrap flex-wrap">
					<div data-aos-delay="100" data-aos="fade-up-right">
						<img src="/images/guide-img.png" alt="intro" className="object-cover" />
					</div>
					<div>
						<h1
							className="font-bold lg:text-6xl sm:5xl text-4xl pb-12"
							data-aos-delay="200"
							data-aos="fade"
						>
							<span className="text-meta-purple">Get Started </span>
							<span className="text-meta-dark-gray">
								with
								<br /> just a few <br />
								Clicks
							</span>
						</h1>
						{guidelines.map(element => (
							<Guideline element={element} key={element.id} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default GuideSection;
