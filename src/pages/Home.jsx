import IntroSection from "../components/home/IntroSection";
import Layout from "../layout/Layout";
import ServiceSection from "../components/home/ServiceSection";
import GuideSection from "../components/home/GuideSection";
import SliderSection from "../components/home/SliderSection";

const Home = () => {
	return (
		<Layout>
			<IntroSection />
			<ServiceSection />
			<GuideSection />
			<SliderSection />
		</Layout>
	);
};

export default Home;
