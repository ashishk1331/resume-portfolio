export type Role = {
	company: string;
	href?: string;
	title: string;
	period: string;
	/** Machine-readable start year, used for the timeline marker. */
	years: string;
	location: string;
	current?: boolean;
	points: string[];
};

export const experience: Role[] = [
	{
		company: "Quinn",
		href: "https://www.linkedin.com/company/quinn-live/",
		title: "Software Engineer",
		period: "Sep 2025 — Present",
		years: "2025",
		location: "Remote · Bengaluru",
		current: true,
		points: [
			"Designed a closed-loop QC pipeline that folds reviewer feedback back into its own prompts, cutting manual tuning and moving QA workflows 3× faster.",
			"Built an image-to-metadata OCR pipeline on Gemini and BullMQ that replaced a manual extraction workflow at 96% accuracy.",
			"Wrote a spatially-aware background engine that segments scenes into body-aligned regions, reducing visual artifacts by 60%.",
			"Architected a pose-aware judgement pipeline that buckets expressions and conditions generation on anchor images for consistent output.",
			"Scaled the Shopify plugin platform with reusable templates, lifting adoption 25% and onboarding 10+ customers.",
		],
	},
	{
		company: "Stoira",
		title: "Software Engineer Intern",
		period: "Jul 2024 — Sep 2024",
		years: "2024",
		location: "Remote · Bengaluru",
		points: [
			"Rebuilt list rendering on FlashList to hold 60fps through long, media-heavy feeds.",
			"Engineered an audio system with queue management, background playback and lockscreen controls.",
			"Shipped multi-provider authentication with deep linking, backed by MongoDB user profiles.",
			"Built a cross-platform UI system of 20+ reusable components in Unistyles.",
		],
	},
	{
		company: "Frontend Hire",
		title: "Design Engineer Intern",
		period: "May 2024 — Jun 2024",
		years: "2024",
		location: "Remote · Hyderabad",
		points: [
			"Built the React Query and Zustand data layer for a React Native app, plus the reusable component set on top of it.",
			"Shipped a markdown publishing flow with a custom Remark plugin, IntersectionObserver-driven navigation and Satori-rendered banners.",
		],
	},
];

export const education = {
	school: "Kamla Nehru Institute of Technology, Sultanpur",
	href: "https://knit.ac.in/",
	degree: "B.Tech, Computer Science and Engineering",
	period: "2021 — 2025",
	detail: "CGPA 8.6 · Division I (Hons)",
};

export type Achievement = {
	label: string;
	detail?: string;
	href: string;
};

export const achievements: Achievement[] = [
	{
		label: "Android Lead & Co-organizer",
		detail: "GDG on Campus, KNIT Sultanpur",
		href: "https://gdg.community.dev/gdg-on-campus-kamla-nehru-institute-of-technology-sultanpur-india/",
	},
	{
		label: "Kaggle Expert",
		detail: "Notebooks across EDA, CNNs and GANs",
		href: "https://www.kaggle.com/ashishk1331",
	},
	{
		label: "Tag Moderator, Dev.to",
		detail: "Curated 120+ JavaScript and React posts",
		href: "https://dev.to/ashishk1331",
	},
	{
		label: "NPTEL, IIT Kharagpur",
		detail: "12-week courses in NLP and Cloud Computing",
		href: "https://drive.google.com/file/d/1kamacvwO63qf1Egq8ybyK6WLQSjbmD60/view?usp=sharing",
	},
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
	{ label: "Languages", items: ["TypeScript", "Go", "Python", "SQL"] },
	{
		label: "Backend & Systems",
		items: [
			"Node.js",
			"Gin",
			"FastAPI",
			"FastMCP",
			"REST APIs",
			"Distributed Systems",
			"Docker",
			"Async Processing",
		],
	},
	{ label: "Databases", items: ["PostgreSQL", "MongoDB", "Turso"] },
	{
		label: "Frontend",
		items: ["React", "Next.js", "React Native", "React Query", "Zustand"],
	},
	{
		label: "Tools & Platforms",
		items: ["Git", "BullMQ", "Supabase", "GCP", "Postman", "Vercel"],
	},
];
