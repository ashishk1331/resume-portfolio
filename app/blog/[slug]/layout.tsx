import type { PropsWithChildren } from "react";

export default function BlogLayout({ children }: PropsWithChildren) {
	return <div className="w-full h-full max-w-2xl mx-auto">{children}</div>;
}
