const ServicesCard = ({ element }) => {
	const { id, title, img, description, color, title_color } = element;

	return (
		<div
			data-aos-offset="100"
			data-aos-delay={`${id}00`}
			data-aos="fade-up"
			className={`${color} pt-36 mx-10 px-10 relative rounded-3xl pb-10 lg:w-1/5 md:w-1/3 w-auto mb-36 md:m-10`}
		>
			<div>
				<img
					src={img}
					alt={title}
					className="absolute left-1/2 transform -translate-x-1/2 -top-36"
				/>
				<div className="info">
					<h3 className={`${title_color} text-2xl font-bold pt-10 pb-4`}>{title}</h3>
					<p className="description text-meta-dark-gray">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default ServicesCard;
