import { team } from "../../lib/data";
import TeamCard from "./children/TeamCard";

const TeamSection = () => {
	return (
		<section className="pb-20 pt-10 relative">
			<img
				src="/images/team-left-astroid.png"
				alt="left-astroid"
				className="absolute left-10 top-10 z-[-10] lg:flex hidden"
			/>
			<img
				src="/images/team-right-astroid.png"
				alt="right-astroid"
				className="absolute right-10 top-0 z-[-10] lg:flex hidden"
			/>
			<div className="container mx-auto">
				<h1
					data-aos-delay="100"
					data-aos="fade"
					className="font-bold lg:text-6xl md:text-5xl text-4xl pb-40 text-center text-meta-dark-gray pt-20"
				>
					Our Team
				</h1>
				<div className="flex justify-center items-center pb-32 flex-wrap">
					{team.map(element => (
						<TeamCard element={element} key={element.id} />
					))}
				</div>
			</div>
			<img
				src="/images/team-middle-astroid.png"
				alt="bottom-astroid"
				className="absolute left-1/3 bottom-10 z-[-10] lg:flex hidden"
			/>
		</section>
	);
};

export default TeamSection;
