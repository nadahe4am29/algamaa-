import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Testimonials = () => {
	const { copy, language } = useLanguage();
	const [index, setIndex] = useState(0);
	const items = copy.testimonials.items;
	const current = items[index];

	const go = (direction: -1 | 1) => {
		setIndex((value) => (value + direction + items.length) % items.length);
	};

	return (
		<section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
			<h2 className="mb-10 text-center text-3xl font-extrabold md:text-5xl">{copy.testimonials.title}</h2>
			<article className="rounded-[32px] bg-[var(--bg-card)] px-8 py-12 text-center shadow-[var(--shadow)] md:px-16">
				<div className="mb-5 flex justify-center gap-1 text-brand">
					{Array.from({ length: 5 }).map((_, starIndex) => (
						<Star key={starIndex} className="size-5 fill-current" />
					))}
				</div>
				<p className="text-lg leading-9 md:text-xl">“{current.quote}”</p>
				<p className="mt-8 text-lg font-extrabold">{current.name}</p>
				<p className="mt-1 text-sm text-[var(--text-muted)]">{current.role}</p>
			</article>
			<div className="mt-6 flex items-center justify-center gap-3">
				<button
					type="button"
					onClick={() => go(language === "ar" ? 1 : -1)}
					className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--bg-card)]"
					aria-label="Previous testimonial"
				>
					<ChevronRight className="size-4 rtl:rotate-0 ltr:rotate-180" />
				</button>
				<div className="flex gap-2">
					{items.map((item, itemIndex) => (
						<button
							key={item.id}
							type="button"
							onClick={() => setIndex(itemIndex)}
							className={`size-2.5 rounded-full ${itemIndex === index ? "bg-brand" : "bg-[var(--text-muted)]/40"}`}
							aria-label={`Go to testimonial ${itemIndex + 1}`}
						/>
					))}
				</div>
				<button
					type="button"
					onClick={() => go(language === "ar" ? -1 : 1)}
					className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--bg-card)]"
					aria-label="Next testimonial"
				>
					<ChevronLeft className="size-4 rtl:rotate-0 ltr:rotate-180" />
				</button>
			</div>
		</section>
	);
};

export default Testimonials;
