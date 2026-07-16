import { Boxes, Database, Smartphone, Terminal } from "lucide-react";
import Section from "./Section";

const skillGroups = [
	{
		title: "Languages",
		icon: Terminal,
		items: ["TypeScript", "Python", "Go", "SQL"],
	},
	{
		title: "Backend & Systems",
		icon: Boxes,
		items: ["Node.js", "FastAPI", "Gin", "Docker", "REST APIs"],
	},
	{
		title: "Frontend & Mobile",
		icon: Smartphone,
		items: [
			"NextJS",
			"React Native",
			"Expo",
			"React Query",
			"Zustand",
			"Reanimated",
		],
	},
	{
		title: "Databases & Platforms",
		icon: Database,
		items: ["PostgreSQL", "MongoDB", "GCP", "Supabase", "Git", "Figma"],
	},
];

export default function Skills() {
	return (
		<Section
			id="skills"
			eyebrow="Toolbox"
			title="my skill tree"
			subtitle="The stack I reach for when turning an idea into something real."
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				{skillGroups.map((group) => {
					const Icon = group.icon;
					return (
						<div
							key={group.title}
							className="pop-card rounded-2xl border-2 border-border bg-paper-white p-5"
						>
							<div className="flex items-center gap-2 mb-3">
								<span className="grid place-items-center size-9 rounded-xl bg-storybook-green text-eager-green">
									<Icon size={18} />
								</span>
								<h3 className="font-bold text-charcoal text-body">
									{group.title}
								</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{group.items.map((item) => (
									<span
										key={item}
										className="rounded-xl bg-storybook-green px-3 py-1 text-caption font-bold text-eager-green"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</Section>
	);
}
