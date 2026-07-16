"use client";

import { Briefcase, Dot, GraduationCap, Rocket } from "lucide-react";
import { motion } from "motion/react";

type Step = {
	title: string;
	role: string;
	desc: string;
	period: string;
	place: string;
	icon: typeof Briefcase;
	tint: "green" | "blue";
};

const steps: Step[] = [
	{
		title: "Quinn",
		role: "Software Engineer",
		desc: "Building agentic QC pipelines, an LLM-powered OCR system for product metadata, a spatially-aware background engine, and scaling the Shopify plugin platform with reusable templates.",
		period: "Sep 2025 – Present",
		place: "Remote · Bengaluru",
		icon: Rocket,
		tint: "green",
	},
	{
		title: "Stoira",
		role: "SDE Intern",
		desc: "Tuned list rendering for smooth scrolling, built a full audio system with queue management and lockscreen controls, shipped multi-provider auth with deep linking, and a cross-platform UI component library in Unistyles.",
		period: "Jul 2024 – Sep 2024",
		place: "Remote · Bengaluru",
		icon: Briefcase,
		tint: "blue",
	},
	{
		title: "FrontendHire",
		role: "Design Engineer Intern",
		desc: "Engineered a React Query + Zustand data layer for a React Native app, crafted pixel-perfect screens and a reusable design system, and built a markdown platform with a custom Remark plugin and a Satori-powered Figma-to-banner pipeline.",
		period: "May 2024 – Jun 2024",
		place: "Remote · Hyderabad",
		icon: Briefcase,
		tint: "green",
	},
	{
		title: "KNIT Sultanpur",
		role: "B.Tech, CSE · 25' batch",
		desc: "Bachelor of Technology in Computer Science and Engineering. Graduated Div-I (Hons) with a cumulative GPA of 8.6, where the whole journey with algorithms and systems began.",
		period: "2021 – 2025",
		place: "Cumulative GPA · 8.6",
		icon: GraduationCap,
		tint: "blue",
	},
];

export default function Journey() {
	return (
		<div className="relative">
			{/* dashed spine */}
			<div className="pointer-events-none absolute top-2 bottom-2 left-6 md:left-1/2 md:-translate-x-1/2 border-l-2 border-dashed border-storybook-green" />

			<div className="flex flex-col gap-12">
				{steps.map((step, i) => {
					const onLeft = i % 2 === 0;
					const Icon = step.icon;
					return (
						<motion.div
							key={step.title}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-80px" }}
							transition={{ duration: 0.4, ease: "easeOut" }}
							className="relative md:grid md:grid-cols-2 md:items-center md:gap-12"
						>
							{/* node */}
							<div
								className={`absolute z-10 left-6 md:left-1/2 -translate-x-1/2 grid place-items-center size-14 rounded-full border-4 border-paper-white text-paper-white shadow-[0_4px_0_0_rgba(0,0,0,0.12)] ${
									step.tint === "green" ? "bg-eager-green" : "bg-spark-blue"
								}`}
							>
								<Icon size={22} />
							</div>

							{/* card */}
							<div
								className={`pl-20 md:pl-0 ${
									onLeft
										? "md:col-start-1 md:pr-12 md:text-right"
										: "md:col-start-2 md:pl-12"
								}`}
							>
								<div className="pop-card rounded-2xl border-2 border-border bg-paper-white p-5">
									<div
										className={`flex flex-wrap items-center gap-2 mb-2 ${
											onLeft ? "md:justify-end" : ""
										}`}
									>
										<h3 className="text-subheading font-bold text-charcoal">
											{step.title}
										</h3>
										<span className="rounded-xl bg-storybook-green px-3 py-0.5 text-caption font-bold uppercase tracking-[0.053em] text-eager-green">
											{step.role}
										</span>
									</div>
									<p className="text-pencil-gray">{step.desc}</p>
									<div
										className={`mt-3 flex flex-wrap items-center gap-1 text-spark-blue text-caption font-bold uppercase tracking-[0.053em] ${
											onLeft ? "md:justify-end" : ""
										}`}
									>
										<span>{step.period}</span>
										<Dot size={16} className="hidden sm:block" />
										<span>{step.place}</span>
									</div>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
