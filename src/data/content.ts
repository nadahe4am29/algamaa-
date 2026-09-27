export type Language = "ar" | "en";

export type NavItem = {
	id: string;
	label: string;
	to: string;
};

export type ServiceCard = {
	id: string;
	title: string;
	icon: "briefcase" | "file" | "globe" | "home";
	items: string[];
	more: string;
};

export type ValueCard = {
	id: string;
	title: string;
	icon: "shield" | "award" | "trend";
	description: string;
};

export type Testimonial = {
	id: string;
	quote: string;
	name: string;
	role: string;
};

export type HomeCopy = {
	dir: "rtl" | "ltr";
	nav: NavItem[];
	register: string;
	languageLabel: string;
	hero: {
		logoTitle: string;
		logoTagline: string;
		title: string;
		subtitle: string;
		seeker: string;
		employer: string;
	};
	stats: { value: string; label: string; icon: "users" | "award" | "building" | "pin" }[];
	services: {
		title: string;
		subtitle: string;
		cards: ServiceCard[];
	};
	values: {
		title: string;
		subtitle: string;
		cards: ValueCard[];
	};
	whyUs: {
		title: string;
		items: string[];
	};
	testimonials: {
		title: string;
		items: Testimonial[];
	};
	cta: {
		title: string;
		subtitle: string;
	};
	footer: {
		about: string;
		license: string;
		quickLinksTitle: string;
		followTitle: string;
		contactTitle: string;
		phone: string;
		email: string;
		address: string;
		privacy: string;
		copyright: string;
		quickLinks: NavItem[];
	};
	placeholders: {
		jobs: { title: string; body: string };
		about: { title: string; body: string };
		faq: { title: string; body: string };
		contact: { title: string; body: string };
		services: { title: string; body: string };
		register: { title: string; body: string };
		privacy: { title: string; body: string };
	};
	whatsappLabel: string;
};

export const content: Record<Language, HomeCopy> = {
	ar: {
		dir: "rtl",
		nav: [
			{ id: "home", label: "الرئيسية", to: "/" },
			{ id: "jobs", label: "الوظائف", to: "/jobs" },
			{ id: "about", label: "عن الشركة", to: "/about" },
			{ id: "faq", label: "الأسئلة الشائعة", to: "/faq" },
			{ id: "contact", label: "اتصل بنا", to: "/contact" },
			{ id: "services", label: "الخدمات", to: "/#services" },
		],
		register: "سجّل الآن",
		languageLabel: "EN",
		hero: {
			logoTitle: "الجامعة",
			logoTagline: "لارتقاء العمالة المصرية بالخارج",
			title: "شركة الجامعة الجسر الأقوى والوجهة الأولى للتوظيف الدولي",
			subtitle:
				"ابدأ رحلتك المهنية الآن سواء كنت باحثاً عن فرصة عمل أو صاحب عمل يبحث عن كفاءات، نحن هنا لخدمتك",
			seeker: "أنا باحث عن عمل",
			employer: "أنا صاحب عمل",
		},
		stats: [
			{ value: "+50,000", label: "موظف موفَّر", icon: "users" },
			{ value: "+19", label: "سنوات في السوق", icon: "award" },
			{ value: "+1000", label: "عميل استراتيجي", icon: "building" },
			{ value: "3", label: "دول مستهدفة", icon: "pin" },
		],
		services: {
			title: "خدماتنا",
			subtitle: "منظومة متكاملة من الخدمات لتلبية كافة احتياجاتك",
			cards: [
				{
					id: "recruitment",
					title: "التوظيف الدولي",
					icon: "briefcase",
					items: ["استقطاب العمالة المصرية", "اعتماد حرفي المعايير", "اتفاقية خدمة", "دعم كامل ومتواصل"],
					more: "اعرف المزيد",
				},
				{
					id: "visas",
					title: "التأشيرات والتفويضات",
					icon: "file",
					items: ["إنهاء إجراءات التأشيرات", "التفويض الحكومي", "حجز مواعيد البصمة", "مراجعة الملفات"],
					more: "اعرف المزيد",
				},
				{
					id: "attestation",
					title: "التوثيق الدولي",
					icon: "globe",
					items: ["توثيق الشهادات", "توثيق الأوراق", "توثيق العقود", "اعتماد دولي"],
					more: "اعرف المزيد",
				},
				{
					id: "support",
					title: "منصة المساندة",
					icon: "home",
					items: ["استقدام آمن", "إجراءات مجوز", "ضمانات كاملة", "دعم مستمر"],
					more: "اعرف المزيد",
				},
			],
		},
		values: {
			title: "قيمنا الجوهرية",
			subtitle: "أعمدة النجاح التي نبني عليها كل إنجاز",
			cards: [
				{
					id: "trust",
					title: "الثقة",
					icon: "shield",
					description:
						"ثقة عملائنا هي أثمن ما نملك، وهي الثمرة الحقيقية لالتزامنا المستمر بتقديم كوادر تطابق بدقة أعلى المعايير.",
				},
				{
					id: "excellence",
					title: "التميز",
					icon: "award",
					description:
						"نبني استراتيجيات تشغيلية مبتكرة وحلول رقمية تضمن إنجاز معاملات عملائنا في وقت قياسي وأعلى مستويات الأداء.",
				},
				{
					id: "success",
					title: "النجاح",
					icon: "trend",
					description:
						"وظّفنا أكثر من 50,000 كادر مصري، محافظين على التزامنا وسعينا في ريادة قطاع العمالة بالخارج.",
				},
			],
		},
		whyUs: {
			title: "لماذا يختارنا أصحاب الأعمال؟",
			items: [
				"سرعة التنفيذ",
				"الدعم المستمر",
				"المصداقية الرسمية",
				"الشفافية المطلقة",
				"كفاءة عالية",
				"تغطية جغرافية",
			],
		},
		testimonials: {
			title: "ماذا يقول عملاؤنا",
			items: [
				{
					id: "1",
					quote:
						"تجربتنا مع شركة الجامعة كانت ممتازة. استطعنا توظيف أكثر من 200 عامل مؤهل في وقت قياسي.",
					name: "أحمد المالكي",
					role: "مدير الموارد البشرية - شركة مقاولات كبرى",
				},
				{
					id: "2",
					quote: "التزامهم بالمواعيد وجودة الترشيحات جعلهم شريكاً أساسياً في توسعنا الخليجي.",
					name: "سارة عبد الرحمن",
					role: "مديرة التوظيف - مجموعة صناعية",
				},
				{
					id: "3",
					quote: "من التأشيرات حتى وصول العمالة، تابعوا معنا كل خطوة بشفافية واحتراف.",
					name: "خالد العتيبي",
					role: "مدير العمليات - شركة خدمات لوجستية",
				},
			],
		},
		cta: {
			title: "خمسون ألفاً وأكثر قصة نجاح كانت بدايتها من هنا",
			subtitle: "انضم إلى قائمة شركائنا واصنع مستقبلك مع الجسر الأقوى للتوظيف الدولي",
		},
		footer: {
			about: "شركة الجامعة لإلحاق العمالة المصرية بالخارج",
			license: "ترخيص رقم 726",
			quickLinksTitle: "روابط سريعة",
			followTitle: "تابعنا",
			contactTitle: "تواصل معنا",
			phone: "01100061116",
			email: "info@algamaa.com.eg",
			address: "26 السادات، مدينة نصر، القاهرة",
			privacy: "سياسة الخصوصية",
			copyright: "© 2026 جميع الحقوق محفوظة لشركة الجامعة",
			quickLinks: [
				{ id: "home", label: "الرئيسية", to: "/" },
				{ id: "jobs", label: "الوظائف", to: "/jobs" },
				{ id: "about", label: "عن الشركة", to: "/about" },
				{ id: "faq", label: "الأسئلة الشائعة", to: "/faq" },
				{ id: "contact", label: "اتصل بنا", to: "/contact" },
				{ id: "privacy", label: "سياسة الخصوصية", to: "/privacy" },
			],
		},
		placeholders: {
			jobs: {
				title: "الوظائف",
				body: "سيتم عرض الوظائف الشاغرة هنا في القسم التالي من التصميم.",
			},
			about: {
				title: "عن الشركة",
				body: "سيتم بناء صفحة عن الشركة عند وصول تصميمها.",
			},
			faq: {
				title: "الأسئلة الشائعة",
				body: "سيتم بناء صفحة الأسئلة الشائعة عند وصول تصميمها.",
			},
			contact: {
				title: "اتصل بنا",
				body: "سيتم بناء صفحة التواصل عند وصول تصميمها.",
			},
			services: {
				title: "الخدمات",
				body: "تفاصيل الخدمات ستُضاف عند وصول تصميم الصفحة.",
			},
			register: {
				title: "سجّل الآن",
				body: "نموذج التسجيل سيُبنى لاحقاً حسب التصميم.",
			},
			privacy: {
				title: "سياسة الخصوصية",
				body: "سيتم إضافة سياسة الخصوصية لاحقاً.",
			},
		},
		whatsappLabel: "تواصل عبر واتساب",
	},
	en: {
		dir: "ltr",
		nav: [
			{ id: "home", label: "Home", to: "/" },
			{ id: "jobs", label: "Jobs", to: "/jobs" },
			{ id: "about", label: "About", to: "/about" },
			{ id: "faq", label: "FAQ", to: "/faq" },
			{ id: "contact", label: "Contact", to: "/contact" },
			{ id: "services", label: "Services", to: "/#services" },
		],
		register: "Register now",
		languageLabel: "AR",
		hero: {
			logoTitle: "Algamaa",
			logoTagline: "Elevating Egyptian labor abroad",
			title: "Algamaa is the strongest bridge and the first destination for international recruitment",
			subtitle:
				"Start your career journey now, whether you are looking for a job or an employer seeking talent. We are here to serve you.",
			seeker: "I am a job seeker",
			employer: "I am an employer",
		},
		stats: [
			{ value: "+50,000", label: "Placed employees", icon: "users" },
			{ value: "+19", label: "Years in the market", icon: "award" },
			{ value: "+1000", label: "Strategic clients", icon: "building" },
			{ value: "3", label: "Target countries", icon: "pin" },
		],
		services: {
			title: "Our services",
			subtitle: "An integrated system of services to meet all your needs",
			cards: [
				{
					id: "recruitment",
					title: "International recruitment",
					icon: "briefcase",
					items: [
						"Egyptian talent sourcing",
						"Standards accreditation",
						"Service agreements",
						"Full ongoing support",
					],
					more: "Learn more",
				},
				{
					id: "visas",
					title: "Visas and authorizations",
					icon: "file",
					items: ["Visa processing", "Government authorization", "Biometrics appointments", "File review"],
					more: "Learn more",
				},
				{
					id: "attestation",
					title: "International attestation",
					icon: "globe",
					items: ["Certificate attestation", "Document attestation", "Contract attestation", "International approval"],
					more: "Learn more",
				},
				{
					id: "support",
					title: "Support platform",
					icon: "home",
					items: ["Safe recruitment", "Licensed procedures", "Full guarantees", "Continuous support"],
					more: "Learn more",
				},
			],
		},
		values: {
			title: "Our core values",
			subtitle: "The pillars of success we build every achievement on",
			cards: [
				{
					id: "trust",
					title: "Trust",
					icon: "shield",
					description:
						"Our clients' trust is our most valuable asset, and the true result of our commitment to providing talent that meets the highest standards.",
				},
				{
					id: "excellence",
					title: "Excellence",
					icon: "award",
					description:
						"We build innovative operating strategies and digital solutions that complete our clients' transactions in record time at the highest performance.",
				},
				{
					id: "success",
					title: "Success",
					icon: "trend",
					description:
						"We have placed more than 50,000 Egyptian professionals while staying committed to leading the overseas labor sector.",
				},
			],
		},
		whyUs: {
			title: "Why do employers choose us?",
			items: [
				"Fast execution",
				"Continuous support",
				"Official credibility",
				"Complete transparency",
				"High efficiency",
				"Geographic coverage",
			],
		},
		testimonials: {
			title: "What our clients say",
			items: [
				{
					id: "1",
					quote:
						"Our experience with Algamaa was excellent. We hired more than 200 qualified workers in record time.",
					name: "Ahmed Al-Malki",
					role: "HR Director - Major contracting company",
				},
				{
					id: "2",
					quote: "Their punctuality and candidate quality made them a core partner in our Gulf expansion.",
					name: "Sara Abdelrahman",
					role: "Recruitment Manager - Industrial group",
				},
				{
					id: "3",
					quote: "From visas to arrival, they followed every step with transparency and professionalism.",
					name: "Khaled Al-Otaibi",
					role: "Operations Director - Logistics company",
				},
			],
		},
		cta: {
			title: "Fifty thousand success stories and more started here",
			subtitle: "Join our partners and build your future with the strongest bridge for international recruitment",
		},
		footer: {
			about: "Algamaa Company for placing Egyptian labor abroad",
			license: "License no. 726",
			quickLinksTitle: "Quick links",
			followTitle: "Follow us",
			contactTitle: "Contact us",
			phone: "01100061116",
			email: "info@algamaa.com.eg",
			address: "26 El Sadat, Nasr City, Cairo",
			privacy: "Privacy policy",
			copyright: "© 2026 All rights reserved to Algamaa",
			quickLinks: [
				{ id: "home", label: "Home", to: "/" },
				{ id: "jobs", label: "Jobs", to: "/jobs" },
				{ id: "about", label: "About", to: "/about" },
				{ id: "faq", label: "FAQ", to: "/faq" },
				{ id: "contact", label: "Contact", to: "/contact" },
				{ id: "privacy", label: "Privacy policy", to: "/privacy" },
			],
		},
		placeholders: {
			jobs: { title: "Jobs", body: "Open positions will appear here when that design section arrives." },
			about: { title: "About", body: "The about page will be built when its design arrives." },
			faq: { title: "FAQ", body: "The FAQ page will be built when its design arrives." },
			contact: { title: "Contact", body: "The contact page will be built when its design arrives." },
			services: { title: "Services", body: "Service details will be added when that page design arrives." },
			register: { title: "Register now", body: "The registration form will be built from its design later." },
			privacy: { title: "Privacy policy", body: "The privacy policy will be added later." },
		},
		whatsappLabel: "Chat on WhatsApp",
	},
};
