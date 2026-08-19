import { primaryLinks, secondaryLinks, site } from "@/constants/site";

const allLinks = [...primaryLinks, ...secondaryLinks];

export default function Footer() {
	return (
		<footer id="contact" className="mt-20 scroll-mt-16 bg-paper">
			<div className="mx-auto max-w-5xl px-5 pb-16">
				<div className="flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
					<p className="max-w-[42ch] text-[1.05rem] leading-relaxed">
						Happy to talk about backend systems, agent infrastructure, or
						anything written here —{" "}
						<a
							href={`mailto:${site.email}`}
							className="italic underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
						>
							get in touch
						</a>
						.
					</p>

					<ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[0.8rem] uppercase tracking-[0.18em]">
						{allLinks.map(({ label, href }) => (
							<li key={label}>
								<a
									href={href}
									target={href.startsWith("mailto:") ? undefined : "_blank"}
									rel="noopener noreferrer"
									className="-my-2 inline-block py-2 text-muted transition-colors hover:text-ink"
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>

				<p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-faint">
					© {new Date().getFullYear()} {site.name} — built with Next.js
				</p>
			</div>
		</footer>
	);
}
