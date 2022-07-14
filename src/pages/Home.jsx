import GuideSection from "../components/home/GuideSection";
import IntroSection from "../components/home/IntroSection";
import Layout from "../layout/Layout";
import ServiceSection from "../components/home/ServiceSection";
import SliderSection from "../components/home/SliderSection";
import TeamSection from "../components/home/TeamSection";

/**
 * Index page component
 * @returns {JSX.Element} Layout - All the index page sections wrapped with common layout
 */
const Home = () => {
	return (
		<Layout>
			<IntroSection />
			<ServiceSection />
			<GuideSection />
			<SliderSection />
			<TeamSection />
		</Layout>
	);
};

export default Home;
