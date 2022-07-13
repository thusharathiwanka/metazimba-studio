import { team } from "../../lib/data";
import TeamCard from "./children/TeamCard";

const TeamSection = () => {
	return (
		<section className="py-20 relative">
			<img
				src="/images/team-left-astroid.png"
				alt="left-astroid"
				className="absolute left-10 top-10 z-[-10]"
			/>
			<img
				src="/images/team-right-astroid.png"
				alt="right-astroid"
				className="absolute right-10 top-28 z-[-10]"
			/>
			<div className="container mx-auto">
				<h1 className="font-bold lg:text-6xl md:text-4xl pb-40 text-center text-meta-dark-gray pt-20">
					Our Team
				</h1>
				<div className="flex justify-center items-center gap-10 md:flex-nowrap flex-wrap pb-32">
					{team.map(element => (
						<TeamCard element={element} key={element.id} />
					))}
				</div>
			</div>
			<img
				src="/images/team-middle-astroid.png"
				alt="bottom-astroid"
				className="absolute left-1/3 bottom-0 z-[-10]"
			/>
		</section>
	);
};

export default TeamSection;
