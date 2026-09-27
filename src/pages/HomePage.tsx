import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CtaBanner from "../components/home/CtaBanner";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import Values from "../components/home/Values";
import WhyChooseUs from "../components/home/WhyChooseUs";

const HomePage = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);

	return (
		<>
			<Hero />
			<Stats />
			<Services />
			<Values />
			<WhyChooseUs />
			<Testimonials />
			<CtaBanner />
		</>
	);
};

export default HomePage;
