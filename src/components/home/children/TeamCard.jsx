/**
 * Person component in team section
 * @param {object} element - Component props (person in team)
 * @returns {JSX.Element} div - Person component
 */
const TeamCard = ({ element }) => {
	const { id, title, img, name } = element;

	return (
		<div
			className="mx-10 px-10 relative rounded-3xl pb-14 flex justify-center items-center"
			data-aos-delay={`${id}00`}
			data-aos="fade-up"
		>
			<div>
				<div className="w-48 h-48 rounded-full">
					<img src={img} alt={title} />
				</div>
				<div className="info flex justify-center items-center flex-col whitespace-nowrap">
					<h3 className="text-2xl font-bold pt-10 pb-4">{title}</h3>
					<p className="description text-gray-500 text-xl font-medium">{name}</p>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;
