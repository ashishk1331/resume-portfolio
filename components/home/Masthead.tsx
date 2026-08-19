import Image from "next/image";
import { achievements, education } from "@/constants/experience";
import { primaryLinks, secondaryLinks, site } from "@/constants/site";

const elsewhere = [...primaryLinks, ...secondaryLinks].filter(
	({ href }) => !href.startsWith("mailto:"),
);

/**
 * The résumé at a glance, directly under the bio line: portrait, then three
 * narrow columns. Everything here is a fact you can check in one scan.
 */
export default function Masthead() {
	return (
		<section
			aria-label="Profile summary"
			className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-3 md:mt-16 md:grid-cols-12 md:gap-x-10"
		>
			<div className="sm:col-span-1 md:col-span-3">
				<Image
					src="/landing/avatar.webp"
					alt={`Portrait of ${site.name}`}
					width={512}
					height={512}
					priority
					className="w-full max-w-[15rem] object-cover"
				/>
			</div>

			<div className="md:col-span-3">
				<h2 className="eyebrow">Education</h2>
				<div className="mt-4 text-[0.95rem] leading-relaxed">
					<p>{education.school}</p>
					<p className="italic text-muted">{education.degree}</p>
					<p className="italic text-muted">{education.period}</p>
					<p className="italic text-muted">{education.detail}</p>
				</div>
			</div>

			<div className="md:col-span-3">
				<h2 className="eyebrow">Achievements</h2>
				<ul className="mt-4 space-y-3 text-[0.95rem] leading-snug">
					{achievements.map(({ label, detail, href }) => (
						<li key={label}>
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="-my-1 inline-block py-1 underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
							>
								{label}
							</a>
							{detail && <p className="italic text-muted">{detail}</p>}
						</li>
					))}
				</ul>
			</div>

			<div className="md:col-span-3">
				<h2 className="eyebrow">Contact</h2>
				<div className="mt-4 text-[0.95rem] leading-relaxed">
					<p className="text-muted">Email</p>
					<a
						href={`mailto:${site.email}`}
						className="-my-1 block wrap-anywhere py-1 text-[0.85rem] italic underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
					>
						{site.email}
					</a>
				</div>
				<div className="mt-6 text-[0.95rem] leading-relaxed">
					<p className="text-muted">Elsewhere</p>
					<ul>
						{elsewhere.map(({ label, href }) => (
							<li key={label}>
								<a
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="-my-1 inline-block py-1 italic underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
								>
									{label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
