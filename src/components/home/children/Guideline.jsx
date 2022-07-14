const Guideline = ({ element }) => {
	const { id, title } = element;

	return (
		<div className="flex pb-10 items-center" data-aos-delay={`${id}00`} data-aos="fade-up">
			<div className="bg-meta-light-purple w-16 h-16 flex justify-center items-center rounded-xl font-bold text-2xl text-meta-dark-gray mr-10">
				<h1>{id}</h1>
			</div>
			<p className="text-xl font-medium text-gray-500">{title}</p>
		</div>
	);
};

export default Guideline;
