export const site = {
	name: "Ashish Khare",
	shortName: "Ashish Khare",
	role: "Software Engineer",
	tagline: "Software Engineer building products, systems & AI agents.",
	description:
		"Software Engineer building products, backend systems, and AI-powered applications. Currently at Quinn.",
	url: "https://ashishk1331.vercel.app",
	locale: "Kanpur, India",
	email: "ashish.khare3110+portfolio@gmail.com",
} as const;

export const currentRole = {
	company: "Quinn",
	title: "Software Engineer",
	href: "https://www.linkedin.com/company/quinn-live/",
} as const;

export type SocialLink = {
	label: string;
	href: string;
};

export const primaryLinks: SocialLink[] = [
	{ label: "GitHub", href: "https://github.com/ashishk1331" },
	{ label: "LinkedIn", href: "https://linkedin.com/in/ashishk1331" },
	{ label: "Email", href: `mailto:${site.email}` },
];

export const secondaryLinks: SocialLink[] = [
	{ label: "X", href: "https://x.com/burntflashlight" },
];
