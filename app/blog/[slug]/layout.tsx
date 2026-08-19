import type { PropsWithChildren } from "react";

export default function BlogLayout({ children }: PropsWithChildren) {
	return <div className="mx-auto h-full w-full max-w-2xl">{children}</div>;
}
