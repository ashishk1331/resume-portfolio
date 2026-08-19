import Section from "@/components/ui/Section";
import { experience } from "@/constants/experience";

export default function Experience() {
	return (
		<Section id="experience" label="Experience">
			<ol className="space-y-11 md:space-y-14">
				{experience.map((role) => (
					<li key={role.company}>
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
							<h3 className="text-xl font-normal leading-tight text-ink">
								{role.href ? (
									<a
										href={role.href}
										target="_blank"
										rel="noopener noreferrer"
										className="-my-1 inline-block py-1 underline decoration-border-strong decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
									>
										{role.company}
									</a>
								) : (
									role.company
								)}
							</h3>
							<p className="shrink-0 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-faint">
								{role.period}
							</p>
						</div>

						<p className="mt-1 text-[0.95rem] italic text-muted">
							{role.title} — {role.location}
						</p>

						<ul className="mt-4 space-y-2 text-[0.95rem] leading-relaxed text-ink/90">
							{role.points.map((point) => (
								<li key={point} className="flex max-w-[64ch] gap-3">
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
					</li>
				))}
			</ol>
		</Section>
	);
}
