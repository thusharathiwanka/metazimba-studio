const Slider = ({ element }) => {
	const { img } = element;

	return (
		<div className="relative text-white">
			<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:block hidden">
				<h1 className="font-bold text-6xl text-center  pb-12 uppercase tracking-wider ">
					Metazimba
				</h1>
				<p className="font-semibold text-2xl text-center tracking-widest">
					A World of Endless Possibilities
				</p>
			</div>
			<img src={img} alt="slider-img" />
		</div>
	);
};

export default Slider;
