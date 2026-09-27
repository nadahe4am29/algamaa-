import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const WhyChooseUs = () => {
	const { copy } = useLanguage();

	return (
		<section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
			<h2 className="mb-10 text-center text-3xl font-extrabold md:text-5xl">{copy.whyUs.title}</h2>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{copy.whyUs.items.map((item) => (
					<div
						key={item}
						className="flex items-center justify-center gap-2 rounded-full bg-[var(--bg-card)] px-6 py-4 text-sm font-bold shadow-[var(--shadow)]"
					>
						<CheckCircle2 className="size-4 text-brand" />
						<span>{item}</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyChooseUs;
