import { useLanguage } from "../context/LanguageContext";
import type { HomeCopy } from "../data/content";

type PlaceholderKey = keyof HomeCopy["placeholders"];

const PlaceholderPage = ({ page }: { page: PlaceholderKey }) => {
	const { copy } = useLanguage();
	const content = copy.placeholders[page];

	return (
		<section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 pb-24 pt-36 text-center">
			<h1 className="text-4xl font-extrabold">{content.title}</h1>
			<p className="mt-4 text-[var(--text-muted)]">{content.body}</p>
		</section>
	);
};

export default PlaceholderPage;
