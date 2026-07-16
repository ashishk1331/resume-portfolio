import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { socials } from "@/constants/socials";

export default function Footer() {
	return (
		<footer className="mt-24 w-full bg-eager-green text-paper-white">
			<div className="container mx-auto max-w-4xl px-4 py-12 flex flex-col items-center gap-6 text-center">
				<p className="font-feather text-3xl md:text-4xl">
					free. fun. thoughtfully built.
				</p>
				<div className="flex flex-wrap items-center justify-center gap-3">
					<Link
						href="/"
						className="text-storybook-green font-bold uppercase tracking-[0.053em] text-nav-label hover:text-paper-white transition-colors"
					>
						Home
					</Link>
					<Link
						href="/about"
						className="text-storybook-green font-bold uppercase tracking-[0.053em] text-nav-label hover:text-paper-white transition-colors"
					>
						About
					</Link>
					<Link
						href="/blog"
						className="text-storybook-green font-bold uppercase tracking-[0.053em] text-nav-label hover:text-paper-white transition-colors"
					>
						Blogs
					</Link>
				</div>
				<div className="flex flex-wrap items-center justify-center gap-2">
					{socials.map(({ href, network }) => (
						<SocialIcon
							key={href}
							href={href}
							network={network}
							className="size-8!"
							bgColor="#ffffff"
							fgColor="#58cc02"
						/>
					))}
				</div>
				<p className="text-storybook-green text-caption">
					Built by Ashish Khare — seventh time&apos;s the charm.
				</p>
			</div>
		</footer>
	);
}
