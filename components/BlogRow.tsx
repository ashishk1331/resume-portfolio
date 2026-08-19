import { format } from "date-fns";
import Link from "next/link";
import type { BlogMetadata } from "@/lib/blogUtil";

/**
 * One line per post: a fixed date column, then the title. No excerpts, no
 * thumbnails — the archive is meant to be scanned, not browsed.
 */
export default function BlogRow({ blog }: { blog: BlogMetadata }) {
	const { title, pubDate, slug, draft } = blog;

	return (
		<li className="flex items-baseline gap-5 sm:gap-8">
			<time
				dateTime={new Date(pubDate).toISOString()}
				className="w-[4.5rem] shrink-0 font-mono text-[0.72rem] tabular-nums text-faint"
			>
				{format(pubDate, "yyyy · MM")}
			</time>
			<Link
				href={`/blog/${slug}`}
				className="-my-1 inline-block py-1 text-[1.05rem] leading-snug text-ink underline decoration-border-strong decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink"
			>
				{title}
			</Link>
			{draft && (
				<span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-faint">
					Draft
				</span>
			)}
		</li>
	);
}
