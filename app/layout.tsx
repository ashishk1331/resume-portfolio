import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Navbar";
import Footer from "@/components/Footer";

// feather substitute — rounded display face for headings
const nunito = Nunito({
	subsets: ["latin"],
	weight: ["700", "800", "900"],
	variable: "--font-nunito",
	display: "swap",
});

// duolingo-sans substitute — geometric sans for body & nav
const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-nunito-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Ashish Khare",
	description:
		"He remade this portfolio for the seventh time. Still no bitches!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${nunito.variable} ${nunitoSans.variable} antialiased bg-paper-white text-charcoal`}
			>
				<Navbar />
				<div className="container mx-auto max-w-4xl mt-8 p-4 space-y-20">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
