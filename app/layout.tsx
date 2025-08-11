import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Navbar";

const barlow = Barlow({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-barlow",
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
			<body className={`${barlow.variable} antialiased`}>
				<Navbar />
				<div className="container mx-auto max-w-4xl my-32 p-4 space-y-8">
					{children}
				</div>
			</body>
		</html>
	);
}
