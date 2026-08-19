import Link from "next/link";
import { site } from "@/constants/site";

const links = [
	{ href: "/#work", label: "Work" },
	{ href: "/#writing", label: "Writing" },
	{ href: "/about", label: "About" },
	{ href: "https://github.com/ashishk1331", label: "GitHub", external: true },
];

export default function Navbar() {
	return (
		<div className="bg-paper">
			<nav
				aria-label="Primary"
				className="mx-auto flex max-w-5xl flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-5 pt-7 pb-1"
			>
				<Link
					href="/"
					className="-my-2 inline-block py-2 text-[0.8rem] uppercase tracking-[0.18em] text-ink no-underline transition-opacity hover:opacity-60"
				>
					{site.name}
				</Link>

				<ul className="flex flex-wrap items-baseline gap-x-6 gap-y-1 text-[0.8rem] uppercase tracking-[0.18em]">
					{links.map(({ href, label, external }) =>
						external ? (
							<li key={href}>
								<a
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="-my-2 inline-block py-2 text-muted transition-opacity hover:text-ink"
								>
									{label}
								</a>
							</li>
						) : (
							<li key={href}>
								<Link
									href={href}
									className="-my-2 inline-block py-2 text-muted transition-colors hover:text-ink"
								>
									{label}
								</Link>
							</li>
						),
					)}
				</ul>
			</nav>
		</div>
	);
}
