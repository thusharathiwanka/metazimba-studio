import IntroSection from "../components/home/IntroSection";
import Layout from "../layout/Layout";
import ServiceSection from "../components/home/ServiceSection";
import GuideSection from "../components/home/GuideSection";

const Home = () => {
	return (
		<Layout>
			<IntroSection />
			<ServiceSection />
			<GuideSection />
		</Layout>
	);
};

export default Home;
