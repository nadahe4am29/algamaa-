import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { content, type HomeCopy, type Language } from "../data/content";

type LanguageContextValue = {
	language: Language;
	copy: HomeCopy;
	toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "elgamaa-language";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<Language>(() => {
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored === "en" ? "en" : "ar";
	});

	useEffect(() => {
		const copy = content[language];
		document.documentElement.lang = language;
		document.documentElement.dir = copy.dir;
		localStorage.setItem(STORAGE_KEY, language);
	}, [language]);

	const value = useMemo(
		() => ({
			language,
			copy: content[language],
			toggleLanguage: () => setLanguage((current) => (current === "ar" ? "en" : "ar")),
		}),
		[language],
	);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within LanguageProvider");
	}
	return context;
};
