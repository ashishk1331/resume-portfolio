import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Not found",
	robots: { index: false, follow: false },
};

export default function NotFound() {
	return (
		<div className="py-12">
			<p className="eyebrow">404</p>
			<h1 className="mt-4 max-w-[18ch] text-[clamp(1.8rem,4.4vw,3rem)] font-normal leading-[1.16] tracking-[-0.01em] text-ink">
				No such route exists.
			</h1>
			<p className="mt-5 max-w-[52ch] leading-relaxed text-muted">
				The page you asked for is not here. It may have moved, or it may never
				have existed.
			</p>
			<div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
				<Link
					href="/"
					className="italic underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
				>
					Go home
				</Link>
				<Link
					href="/#writing"
					className="italic underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
				>
					Read the writing
				</Link>
			</div>
		</div>
	);
}
