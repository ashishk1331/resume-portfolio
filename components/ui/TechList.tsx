import { twMerge } from "tailwind-merge";

/**
 * Stacks read as one dotted line rather than a row of pill chips — denser, and
 * it keeps the page from turning into a badge wall. The separator trails its
 * item so a wrapped line never starts with a stray dot.
 */
export default function TechList({
	items,
	className,
}: {
	items: readonly string[];
	className?: string;
}) {
	return (
		<ul
			className={twMerge(
				"flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-faint",
				className,
			)}
		>
			{items.map((item, i) => (
				<li key={item} className="flex items-center gap-2">
					{item}
					{i < items.length - 1 && (
						<span aria-hidden="true" className="text-border-strong">
							·
						</span>
					)}
				</li>
			))}
		</ul>
	);
}
