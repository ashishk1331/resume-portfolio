import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TechList from "@/components/ui/TechList";
import { featuredProjects, getProject } from "@/constants/projects";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
	return featuredProjects
		.filter((project) => project.caseStudy?.length)
		.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) return {};

	const title = `${project.title} — ${project.category}`;
	return {
		title,
		description: project.summary,
		alternates: { canonical: `/projects/${slug}` },
		openGraph: {
			type: "article",
			title,
			description: project.summary,
			url: `/projects/${slug}`,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: project.summary,
		},
	};
}

export default async function ProjectPage({ params }: Params) {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project?.caseStudy?.length) return notFound();

	const index = featuredProjects.findIndex((p) => p.slug === slug) + 1;

	return (
		<article className="rise">
			<Link
				href="/#work"
				className="-my-1 inline-flex items-center gap-1.5 py-1 text-[0.9rem] italic text-muted transition-colors hover:text-ink"
			>
				<ArrowLeft size={14} aria-hidden="true" />
				All work
			</Link>

			<header className="mt-8 border-b border-border pb-10">
				<p className="eyebrow">
					{String(index).padStart(2, "0")} — {project.category}
				</p>

				<h1 className="mt-3 text-4xl font-normal leading-tight tracking-[-0.01em] text-ink md:text-[3.25rem]">
					{project.title}
				</h1>

				<p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink/90">
					{project.summary}
				</p>

				<div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
					{project.links.map(({ label, href }) => (
						<a
							key={href}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="-my-1 inline-flex items-center gap-1.5 py-1 italic underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
						>
							{label}
							<ArrowUpRight size={14} aria-hidden="true" />
						</a>
					))}
				</div>

				<TechList items={project.stack} className="mt-6" />
			</header>

			<div className="mt-12 space-y-12 md:mt-14 md:space-y-14">
				{project.caseStudy.map(({ heading, body, points }) => (
					<section
						key={heading}
						className="grid grid-cols-1 items-start gap-x-10 gap-y-3 md:grid-cols-12"
					>
						<h2 className="eyebrow md:sticky md:top-8 md:col-span-3 md:text-right">
							{heading}
						</h2>
						<div className="md:col-span-9">
							{body?.map((paragraph) => (
								<p
									key={paragraph}
									className="mb-4 max-w-[64ch] leading-relaxed text-ink/90 last:mb-0"
								>
									{paragraph}
								</p>
							))}
							{points && (
								<ul className="space-y-2.5 text-ink/90">
									{points.map((point) => (
										<li key={point} className="flex max-w-[64ch] gap-3">
											<span
												aria-hidden="true"
												className="shrink-0 select-none text-border-strong"
											>
												—
											</span>
											<span className="leading-relaxed">{point}</span>
										</li>
									))}
								</ul>
							)}
						</div>
					</section>
				))}
			</div>

			<nav
				aria-label="Other projects"
				className="mt-16 border-t border-border pt-8"
			>
				<p className="eyebrow">Other work</p>
				<ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
					{featuredProjects
						.filter((p) => p.slug !== slug && p.caseStudy?.length)
						.map((p) => (
							<li key={p.slug}>
								<Link
									href={`/projects/${p.slug}`}
									className="-my-1 inline-block py-1 text-lg underline decoration-border-strong decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink"
								>
									{p.title}
									<span className="ml-2 text-[0.9rem] italic text-muted">
										{p.category}
									</span>
								</Link>
							</li>
						))}
				</ul>
			</nav>
		</article>
	);
}
