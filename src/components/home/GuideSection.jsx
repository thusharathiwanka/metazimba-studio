import { guidelines } from "../../lib/data";
import Guideline from "./children/Guideline";

const GuideSection = () => {
	return (
		<section className="pt-40 pb-28 relative">
			<img
				src="/images/guidelines-right-stars.png"
				alt="right-astroid"
				className="absolute left-10 bottom-0 z-[-10]"
			/>
			<img
				src="/images/guidelines-left-astroid.png"
				alt="left-astroid"
				className="absolute right-10 bottom-0 z-[-10]"
			/>
			<div className="container mx-auto">
				<div className="flex justify-center gap-20">
					<div className="">
						<img src="/images/guide-img.png" alt="intro" className="object-cover" />
					</div>
					<div>
						<h1 className="font-bold lg:text-6xl md:text-4xl pb-12">
							<span className="text-meta-purple">Get Started </span>
							<span className="text-meta-dark-gray">
								with
								<br /> just a few <br />
								Clicks
							</span>
						</h1>
						{guidelines.map(element => (
							<Guideline element={element} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default GuideSection;
