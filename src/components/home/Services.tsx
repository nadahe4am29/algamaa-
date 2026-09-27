import { BriefcaseBusiness, CircleCheck, FileText, Globe, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const icons = {
	briefcase: BriefcaseBusiness,
	file: FileText,
	globe: Globe,
	home: Home,
};

const Services = () => {
	const { copy } = useLanguage();

	return (
		<section id="services" className="bg-[#2b3446] px-4 py-20 md:px-8">
			<div className="mb-14 text-center">
				<h2 className="text-3xl font-extrabold md:text-5xl">{copy.services.title}</h2>
				<p className="mt-3 text-[var(--text-muted)]">{copy.services.subtitle}</p>
			</div>
			<div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
				{copy.services.cards.map((card) => {
					const Icon = icons[card.icon];
					return (
						<article key={card.id} className="bg-card rounded-[28px] px-6 py-8">
							<div className="mb-6 inline-flex size-10 items-center justify-center rounded-lg bg-[hsl(218,65%,28%)] text-white">
								<Icon className="size-5" strokeWidth={1.75} />
							</div>
							<h3 className="mb-5 text-xl font-extrabold">{card.title}</h3>
							<ul className="space-y-3 text-sm text-[var(--text-muted)]">
								{card.items.map((item) => (
									<li key={item} className="flex items-start gap-2">
										<CircleCheck className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={1.75} />
										<span>{item}</span>
									</li>
								))}
							</ul>
							<Link to="/services" className="mt-6 inline-flex items-center text-sm text-brand">
								{card.more}
							</Link>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
