import IntroSection from "../components/home/IntroSection";
import Layout from "../layout/Layout";
import ServiceSection from "../components/home/ServiceSection";

const Home = () => {
	return (
		<Layout>
			<IntroSection />
			<ServiceSection />
		</Layout>
	);
};

export default Home;
