import Link from "next/link";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/blog", label: "Blogs" },
];

export default function Navbar() {
	return (
		<nav className="sticky top-0 z-40 w-full bg-paper-white/90 backdrop-blur border-b-2 border-border">
			<div className="container mx-auto max-w-4xl flex items-center justify-between gap-2 px-4 py-3">
				<Link
					href="/"
					className="font-feather text-eager-green text-xl sm:text-2xl leading-none shrink-0"
				>
					ashish.
				</Link>
				<ul className="flex items-center gap-0.5 sm:gap-1">
					{links.map(({ href, label }) => (
						<li key={href}>
							<Link
								href={href}
								className="block rounded-xl px-2.5 py-2 sm:px-4 text-[13px] sm:text-nav-label font-bold uppercase tracking-[0.053em] text-pencil-gray transition-colors hover:bg-storybook-green hover:text-eager-green"
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
