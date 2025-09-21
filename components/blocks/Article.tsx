import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function Article({ children, className }: PropsWithChildren & { className?: string }) {
    return <article className={twMerge(`
    prose prose-lg prose-invert max-w-none
    prose-headings:text-[var(--color-fore)]
    prose-p:text-[var(--color-fore)]
    prose-a:text-[var(--color-accent)] prose-a:no-underline prose-a:font-medium hover:prose-a:text-accent-hover
    prose-blockquote:border-l-4 prose-blockquote:border-constant prose-blockquote:text-fore
    prose-strong:text-[var(--color-fore)]
    prose-code:text-[var(--color-accent)] prose-code:bg-[var(--color-highlight)] prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md
    prose-pre:bg-[var(--color-black-main)] prose-pre:text-[var(--color-fore)] prose-pre:rounded-lg prose-pre:p-4
    prose-ol:text-[var(--color-fore)] prose-ul:text-[var(--color-fore)]
    prose-li:marker:text-[var(--color-accent)]
    prose-hr:border-[var(--color-accent)]
  `, className)}>{children}</article>;
}