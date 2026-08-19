import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import TechList from "@/components/ui/TechList";
import type { Project } from "@/constants/projects";

type Props = {
	project: Project;
	/** 1-based position, printed as the entry's index. */
	index: number;
	featured?: boolean;
};

export default function ProjectCard({ project, index, featured }: Props) {
	const {
		slug,
		title,
		category,
		summary,
		highlights,
		stack,
		links,
		caseStudy,
	} = project;
	const hasCaseStudy = Boolean(caseStudy?.length);

	return (
		<article className="group flex h-full flex-col">
			<p className="eyebrow">{String(index).padStart(2, "0")}</p>

			<h3
				className={`mt-3 font-normal leading-tight tracking-[-0.01em] text-ink ${
					featured ? "text-3xl md:text-4xl" : "text-2xl"
				}`}
			>
				{hasCaseStudy ? (
					<Link
						href={`/projects/${slug}`}
						className="underline decoration-border-strong decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
					>
						{title}
					</Link>
				) : (
					title
				)}
			</h3>

			<p className="mt-1 text-[0.95rem] italic text-muted">{category}</p>

			<p
				className={`mt-4 max-w-[58ch] leading-relaxed text-ink/90 ${
					featured ? "text-[1.05rem]" : "text-[0.95rem]"
				}`}
			>
				{summary}
			</p>

			{highlights.length > 0 && (
				<ul
					className={`mt-4 space-y-2 leading-relaxed text-muted ${
						featured ? "text-[0.95rem]" : "text-[0.9rem]"
					}`}
				>
					{highlights.map((point) => (
						<li key={point} className="flex max-w-[62ch] gap-3">
							<span
								aria-hidden="true"
								className="shrink-0 select-none text-border-strong"
							>
								—
							</span>
							{point}
						</li>
					))}
				</ul>
			)}

			<TechList items={stack} className="mt-5" />

			<div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.9rem]">
				{hasCaseStudy && (
					<Link
						href={`/projects/${slug}`}
						className="-my-1 inline-block py-1 italic underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
					>
						Read the case study
					</Link>
				)}
				{links.map(({ label, href }) => (
					<a
						key={href}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="-my-1 inline-flex items-center gap-1 py-1 italic text-muted underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
					>
						{label}
						<ArrowUpRight size={13} aria-hidden="true" />
					</a>
				))}
			</div>
		</article>
	);
}
