import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Slider from "./children/Slider";
import { slides } from "../../lib/data";

/**
 * Slider section component
 * @returns {JSX.Element} section - Slider component
 */
const SliderSection = () => {
	SwiperCore.use([Autoplay]);

	return (
		<section className="pt-16 pb-20">
			<div>
				<Swiper autoplay={{ delay: 3000 }} slidesPerView={1} loop>
					{slides.map(element => (
						<SwiperSlide key={element.id}>
							<Slider element={element} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default SliderSection;
