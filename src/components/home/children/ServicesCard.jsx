const ServicesCard = ({ element }) => {
	const { title, img, description, color, title_color } = element;
	console.log(color, title_color);

	return (
		<div className={`${color} pt-36 mx-10 px-10 relative rounded-3xl pb-10`}>
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
