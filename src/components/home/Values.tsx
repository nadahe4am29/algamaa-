import { Award, Shield, TrendingUp } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const icons = {
	shield: Shield,
	award: Award,
	trend: TrendingUp,
};

const Values = () => {
	const { copy } = useLanguage();

	return (
		<section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
			<div className="mb-12 text-center">
				<h2 className="text-3xl font-extrabold md:text-5xl">{copy.values.title}</h2>
				<p className="mt-3 text-[var(--text-muted)]">{copy.values.subtitle}</p>
			</div>
			<div className="grid gap-4 md:grid-cols-3">
				{copy.values.cards.map((card) => {
					const Icon = icons[card.icon];
					return (
						<article
							key={card.id}
							className="rounded-[28px] bg-[var(--bg-card)] px-8 py-10 text-center shadow-[var(--shadow)]"
						>
							<div className="mx-auto mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-brand text-white">
								<Icon className="size-5" />
							</div>
							<h3 className="mb-4 text-2xl font-extrabold">{card.title}</h3>
							<p className="leading-8 text-[var(--text-muted)]">{card.description}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Values;
