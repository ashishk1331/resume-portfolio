import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import TechList from "@/components/ui/TechList";
import { experiments } from "@/constants/projects";

export default function Experiments() {
	return (
		<Section id="experiments" label="Experiments">
			<p className="mb-8 max-w-[58ch] leading-relaxed text-muted">
				Smaller builds and older work — libraries, apps and model training runs
				kept around because the ideas in them still hold up.
			</p>
			<ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
				{experiments.map((project) => {
					const link = project.links[0];
					return (
						<li key={project.slug}>
							<h3 className="text-lg font-normal leading-tight text-ink">
								<a
									href={link.href}
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
						</li>
					);
				})}
			</ul>
		</Section>
	);
}
