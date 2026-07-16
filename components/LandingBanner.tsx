import { BookOpen, Flame, Rocket, Trophy } from "lucide-react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { ProjectsItems } from "@/constants/projects";
import { socials } from "@/constants/socials";
import { getPublishedBlogs } from "@/lib/blogUtil";

export default function LandingBanner() {
	const projectCount = ProjectsItems.length;
	const blogCount = getPublishedBlogs().length;

	const stats = [
		{
			icon: Rocket,
			value: `${projectCount}`,
			label: "Projects",
			tint: "green",
		},
		{
			icon: BookOpen,
			value: `${blogCount}`,
			label: "Blog posts",
			tint: "blue",
		},
		{ icon: Trophy, value: "1525", label: "LeetCode", tint: "green" },
		{ icon: Flame, value: "3+", label: "Yrs building", tint: "blue" },
	] as const;

	return (
		<section className="pt-4">
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
				<div className="flex flex-col items-start gap-5 order-2 md:order-1">
					<span className="eyebrow">
						<span className="size-2 rounded-full bg-eager-green" />
						Software Engineer
					</span>
					<h1 className="font-feather text-eager-green text-[34px] sm:text-[40px] md:text-[64px] leading-[1.05]">
						hi, i&apos;m ashish.
					</h1>
					<p className="text-body text-pencil-gray max-w-[480px]">
						I build all sorts of things—websites, apps, dev tools, libraries,
						servers, models, even circuits. Learning in public, one commit at a
						time.
					</p>
					<div className="flex flex-wrap items-center gap-3">
						<a
							href="mailto:ashish.khare3110+portfolio@gmail.com"
							className="duo-btn duo-btn--primary"
						>
							Get in touch
						</a>
						<a
							href="https://x.com/burntflashlight"
							target="_blank"
							rel="noopener noreferrer"
							className="duo-btn duo-btn--ghost"
						>
							Ping me on X
						</a>
					</div>
					<div className="flex flex-wrap items-center gap-2 mt-1">
						{socials.map(({ href, network }) => (
							<SocialIcon
								key={href}
								href={href}
								network={network}
								className="size-8!"
							/>
						))}
					</div>
				</div>

				<div className="order-1 md:order-2 flex justify-center md:justify-end">
					<div className="relative">
						<div className="absolute -inset-4 rounded-full bg-storybook-green/50 blur-sm" />
						<div className="relative animate-float rounded-full border-[3px] border-eager-green p-1.5 bg-paper-white">
							<Image
								src="/landing/avatar.webp"
								width={512}
								height={512}
								className="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover"
								alt="A photo of me."
							/>
						</div>
						<div className="absolute -bottom-2 -right-2 rounded-2xl bg-eager-green px-3 py-1.5 text-paper-white text-caption font-bold uppercase tracking-[0.053em] shadow-[0_4px_0_0_#4aad02]">
							ships code 🚀
						</div>
					</div>
				</div>
			</div>

			<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
				{stats.map(({ icon: Icon, value, label, tint }) => (
					<div
						key={label}
						className="pop-card rounded-2xl border-2 border-border bg-paper-white p-4 flex flex-col items-center gap-1"
					>
						<span
							className={`grid place-items-center size-10 rounded-full mb-1 ${
								tint === "green"
									? "bg-storybook-green text-eager-green"
									: "bg-[#e0f4ff] text-spark-blue"
							}`}
						>
							<Icon size={20} />
						</span>
						<span className="font-feather text-eager-green text-2xl leading-none">
							{value}
						</span>
						<span className="text-caption font-bold uppercase tracking-[0.053em] text-pencil-gray">
							{label}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
