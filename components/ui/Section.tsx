import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
	id: string;
	label: string;
	children: ReactNode;
	className?: string;
};

/**
 * The page's one layout primitive: a small label in a narrow column, content in
 * a wide one. The label sticks while its section scrolls, so you always know
 * which part of the page you are in.
 */
export default function Section({
	id,
	label,
	children,
	className,
}: SectionProps) {
	const headingId = `${id}-heading`;

	return (
		<section
			id={id}
			aria-labelledby={headingId}
			className={twMerge(
				"grid scroll-mt-16 grid-cols-1 items-start gap-x-10 gap-y-6 md:grid-cols-12",
				className,
			)}
		>
			<h2
				id={headingId}
				className="eyebrow md:sticky md:top-8 md:col-span-3 md:text-right"
			>
				{label}
			</h2>
			<div className="md:col-span-9">{children}</div>
		</section>
	);
}
