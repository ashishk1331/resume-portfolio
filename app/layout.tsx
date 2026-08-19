import type { Metadata } from "next";
import { JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Navbar";
import Footer from "@/components/Footer";
import { primaryLinks, site } from "@/constants/site";

const newsreader = Newsreader({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	style: ["normal", "italic"],
	variable: "--font-newsreader",
	display: "swap",
});

const mono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-mono-code",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: `${site.name} — ${site.role}`,
		template: `%s — ${site.name}`,
	},
	description: site.description,
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		url: site.url,
		siteName: site.name,
		title: `${site.name} — ${site.role}`,
		description: site.description,
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: `${site.name} — ${site.role}`,
		description: site.description,
		creator: "@burntflashlight",
	},
	robots: { index: true, follow: true },
};

const personSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: site.name,
	url: site.url,
	jobTitle: site.role,
	worksFor: { "@type": "Organization", name: "Quinn" },
	knowsAbout: [
		"Backend Engineering",
		"Distributed Systems",
		"Go",
		"Python",
		"TypeScript",
		"AI Agent Infrastructure",
	],
	sameAs: primaryLinks
		.filter(({ href }) => !href.startsWith("mailto:"))
		.map(({ href }) => href),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${newsreader.variable} ${mono.variable} scroll-smooth`}
		>
			<body className="bg-paper text-ink antialiased">
				<a
					href="#main"
					className="sr-only rounded-md border border-border bg-surface px-4 py-2 text-sm focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60"
				>
					Skip to content
				</a>
				<Navbar />
				<main id="main" className="mx-auto max-w-5xl px-5 pt-10 md:pt-14">
					{children}
				</main>
				<Footer />
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: static, non-user JSON-LD
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
				/>
			</body>
		</html>
	);
}
