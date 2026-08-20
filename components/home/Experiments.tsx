import { ArrowUpRight, ChevronDown } from "lucide-react";
import Section from "@/components/ui/Section";
import TechList from "@/components/ui/TechList";
import type { Project } from "@/constants/projects";
import { experiments } from "@/constants/projects";

/** How many entries are visible before the disclosure is opened. */
const INITIALLY_VISIBLE = 2;

const GRID = "grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2";

const visible = experiments.slice(0, INITIALLY_VISIBLE);
const hidden = experiments.slice(INITIALLY_VISIBLE);

function Experiment({ project }: { project: Project }) {
	const [primary, ...secondary] = project.links;

	return (
		<li>
			<h3 className="text-lg font-normal leading-tight text-ink">
				<a
					href={primary.href}
					target="_blank"
					rel="noopener noreferrer"
					className="-my-1 inline-flex items-baseline gap-1 py-1 underline decoration-border-strong decoration-1 underline-offset-[5px] transition-colors hover:decoration-ink"
				>
					{project.title}
					<ArrowUpRight
						size={13}
						aria-hidden="true"
						className="shrink-0 self-center text-faint"
					/>
				</a>
			</h3>
			<p className="mt-0.5 text-[0.9rem] italic text-muted">
				{project.category}
			</p>
			<p className="mt-2 max-w-[52ch] text-[0.95rem] leading-relaxed text-ink/90">
				{project.summary}
			</p>
			<TechList items={project.stack} className="mt-2.5" />
			{secondary.length > 0 && (
				<ul className="mt-2 flex flex-wrap gap-x-4">
					{secondary.map(({ label, href }) => (
						<li key={href}>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="-my-1 inline-flex items-center gap-1 py-1 text-[0.9rem] italic text-muted underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
							>
								{label}
								<ArrowUpRight size={13} aria-hidden="true" />
							</a>
						</li>
					))}
				</ul>
			)}
		</li>
	);
}

export default function Experiments() {
	return (
		<Section id="experiments" label="Experiments">
			<p className="mb-8 max-w-[58ch] leading-relaxed text-muted">
				Smaller builds and older work — libraries, apps and model training runs
				kept around because the ideas in them still hold up.
			</p>

			<ul className={GRID}>
				{visible.map((project) => (
					<Experiment key={project.slug} project={project} />
				))}
			</ul>

			{hidden.length > 0 && (
				/* Native disclosure rather than a client component: no JavaScript
				   ships, it works with the keyboard for free, and the collapsed
				   entries stay in the DOM for crawlers. */
				<details className="group mt-10">
					<summary className="-my-1 inline-flex cursor-pointer list-none items-center gap-1.5 py-1 text-[0.95rem] italic text-muted underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink [&::-webkit-details-marker]:hidden">
						<span className="group-open:hidden">Show {hidden.length} more</span>
						<span className="hidden group-open:inline">Show fewer</span>
						<ChevronDown
							size={14}
							aria-hidden="true"
							className="shrink-0 transition-transform group-open:rotate-180"
						/>
					</summary>
					<ul className={`${GRID} mt-8`}>
						{hidden.map((project) => (
							<Experiment key={project.slug} project={project} />
						))}
					</ul>
				</details>
			)}
		</Section>
	);
}
