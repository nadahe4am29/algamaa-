import { Link } from "react-router-dom";
import background from "../../assets/background.jpg";
import { useLanguage } from "../../context/LanguageContext";
import BrandLogo from "../BrandLogo";

const Hero = () => {
	const { copy } = useLanguage();

	return (
		<section className="relative isolate min-h-[36rem] overflow-hidden text-white md:min-h-[42rem]">
			<img
				src={background}
				alt=""
				className="absolute inset-0 size-full object-cover object-[center_72%]"
			/>
			<div className="absolute inset-0 bg-[hsl(217,80%,24%)] mix-blend-multiply opacity-75" />
			<div className="absolute inset-0 hero-gradient opacity-40" />

			<div className="relative z-10 mx-auto flex min-h-[36rem] max-w-7xl flex-col justify-center px-4 pb-16 pt-28 md:min-h-[42rem] md:px-8 md:pb-24 md:pt-32">
				<div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
					<h1 className="max-w-2xl text-center text-3xl font-extrabold leading-tight md:text-start md:text-5xl">
						{copy.hero.title}
					</h1>
					<BrandLogo title={copy.hero.logoTitle} className="shrink-0" />
				</div>

				<p className="mx-auto mt-10 max-w-3xl text-center text-base leading-8 text-white/90 md:text-lg">
					{copy.hero.subtitle}
				</p>

				<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
					<Link
						to="/register?role=seeker"
						className="inline-flex h-12 items-center rounded-full bg-brand px-7 text-sm font-extrabold text-white transition hover:bg-brand-hover"
					>
						{copy.hero.seeker}
					</Link>
					<Link
						to="/register?role=employer"
						className="inline-flex h-12 items-center rounded-full bg-white px-7 text-sm font-extrabold text-slate-900 transition hover:bg-slate-100"
					>
						{copy.hero.employer}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
