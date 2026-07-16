import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function Article({
	children,
	className,
}: PropsWithChildren & { className?: string }) {
	return (
		<article
			className={twMerge(
				`
    prose prose-lg max-w-none
    prose-headings:font-bold prose-headings:text-charcoal
    prose-h1:font-feather prose-h1:text-eager-green
    prose-h2:text-eager-green
    prose-p:text-pencil-gray
    prose-a:text-spark-blue prose-a:no-underline prose-a:font-bold hover:prose-a:underline
    prose-blockquote:border-l-4 prose-blockquote:border-eager-green prose-blockquote:text-charcoal prose-blockquote:not-italic
    prose-strong:text-charcoal prose-strong:font-bold
    prose-em:text-charcoal
    prose-code:text-eager-green prose-code:bg-[var(--color-highlight)] prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
    prose-pre:bg-[var(--color-code-bg)] prose-pre:text-[var(--color-foreground)] prose-pre:rounded-xl prose-pre:p-4
    prose-ol:text-pencil-gray prose-ul:text-pencil-gray
    prose-li:marker:text-eager-green
    prose-hr:border-border
    prose-img:rounded-xl
  `,
				className,
			)}
		>
			{children}
		</article>
	);
}
