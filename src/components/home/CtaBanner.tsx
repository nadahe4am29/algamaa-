import { useLanguage } from "../../context/LanguageContext";

const CtaBanner = () => {
	const { copy } = useLanguage();

	return (
		<section className="hero-gradient px-4 py-20 text-center text-white md:px-6 md:py-28">
			<h2 className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">{copy.cta.title}</h2>
			<p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">{copy.cta.subtitle}</p>
		</section>
	);
};

export default CtaBanner;
