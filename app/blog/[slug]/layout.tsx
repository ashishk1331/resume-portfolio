import type { PropsWithChildren } from "react";
import Footer from "@/components/Footer";

export default function BlogLayout({ children }: PropsWithChildren) {
	return (
		<>
			<div className="w-full h-full max-w-2xl mx-auto">{children}</div>
			<Footer />
		</>
	);
}
