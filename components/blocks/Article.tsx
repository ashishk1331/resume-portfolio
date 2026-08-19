import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Long-form reading surface. Sized for a ~68ch measure at prose-lg, which is
 * what the 2xl article container gives it.
 */
export default function Article({
	children,
	className,
}: PropsWithChildren & { className?: string }) {
	return (
		<article
			className={twMerge(
				`
    prose prose-lg max-w-none
    prose-headings:text-ink prose-headings:font-normal prose-headings:tracking-[-0.01em]
    prose-h1:text-4xl
    prose-h2:mt-14 prose-h2:mb-4 prose-h2:text-[1.75rem]
    prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-xl
    prose-p:text-ink/90 prose-p:leading-relaxed
    prose-a:text-ink prose-a:font-normal prose-a:no-underline
    prose-a:[text-decoration:underline] prose-a:decoration-border-strong prose-a:decoration-1 prose-a:underline-offset-[5px]
    hover:prose-a:decoration-ink
    prose-blockquote:border-l prose-blockquote:border-border-strong prose-blockquote:italic prose-blockquote:text-muted prose-blockquote:font-normal
    prose-strong:text-ink prose-strong:font-semibold
    prose-em:italic
    prose-code:text-ink prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-normal prose-code:text-[0.85em] prose-code:font-mono
    prose-code:before:content-none prose-code:after:content-none
    prose-pre:bg-transparent prose-pre:p-0 prose-pre:rounded-none
    prose-ol:text-ink/90 prose-ul:text-ink/90
    prose-li:marker:text-border-strong
    prose-img:rounded-none
    prose-table:text-base prose-th:text-ink prose-td:text-ink/90
    prose-hr:border-border
    wavy-hr
  `,
				className,
			)}
		>
			{children}
		</article>
	);
}
