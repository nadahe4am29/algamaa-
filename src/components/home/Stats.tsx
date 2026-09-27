import { Award, Building2, MapPin, Users } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const icons = {
	users: Users,
	award: Award,
	building: Building2,
	pin: MapPin,
};

const Stats = () => {
	const { copy } = useLanguage();

	return (
		<section className="bg-[#1a2132] px-4 py-20 md:px-8">
			<div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
				{copy.stats.map((stat) => {
					const Icon = icons[stat.icon];
					return (
						<article key={stat.label} className="bg-muted rounded-[28px] px-6 py-12 text-center">
							<Icon className="mx-auto mb-5 size-6 text-brand" strokeWidth={1.75} />
							<p dir="ltr" className="text-3xl font-extrabold tracking-tight">
								{stat.value}
							</p>
							<p className="mt-2 text-sm text-[var(--text-muted)]">{stat.label}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Stats;
