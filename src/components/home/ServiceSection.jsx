import { data } from "../../lib/data";
import ServicesCard from "./children/ServicesCard";

const ServiceSection = () => {
	return (
		<section className="py-20 relative">
			<img
				src="/images/services-left-astroid.png"
				alt="left-astroid"
				className="absolute left-10 top-10 z-[-10]"
			/>
			<img
				src="/images/services-right-astroid.png"
				alt="right-astroid"
				className="absolute right-10 top-28 z-[-10]"
			/>
			<img
				src="/images/services-middle-stars.png"
				alt="middle-stars"
				className="absolute left-1/2 top-20 transform -translate-x-1/2 z-[-10]"
			/>
			<div className="container mx-auto">
				<h1 className="font-bold lg:text-6xl md:text-4xl pb-40 text-center text-meta-dark-gray pt-20">
					Our Services
				</h1>
				<div className="flex justify-center items-center gap-10 py-20 md:flex-nowrap flex-wrap">
					{data.map(element => (
						<ServicesCard element={element} key={element.id} />
					))}
				</div>
			</div>
			<img
				src="/images/services-bottom-astroid.png"
				alt="bottom-astroid"
				className="absolute left-1/3 bottom-0 z-[-10]"
			/>
		</section>
	);
};

export default ServiceSection;
