import { site } from "@/constants/site";

export default function Hero() {
	return (
		<header className="rise mt-10 mb-20 sm:mt-16 sm:mb-24 md:mt-24 md:mb-36">
			{/* The bio line is the h1 — it is the first and largest thing on the
			    page, so the document outline should say so. */}
			<h1 className="text-[clamp(1.65rem,3.6vw,2.85rem)] font-normal leading-[1.2] tracking-[-0.01em] text-ink">
				<span className="sr-only">{site.name} — </span>
				I&apos;m Ashish Khare, a software engineer building{" "}
				<em className="italic">products, systems and AI agents</em>. I work
				across backend services, full-stack products and the infrastructure that
				keeps AI systems running — currently at{" "}
				<a
					href="https://www.linkedin.com/company/quinn-live/"
					target="_blank"
					rel="noopener noreferrer"
					className="underline decoration-border-strong decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
				>
					Quinn
				</a>
				.
			</h1>
		</header>
	);
}
