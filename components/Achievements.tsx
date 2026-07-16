import {
	Award,
	BadgeCheck,
	Cloud,
	Code2,
	ExternalLink,
	Medal,
	Sparkles,
	Trophy,
	Users,
} from "lucide-react";
import Section from "./Section";

const achievements = [
	{
		href: "https://leetcode.com/u/flangdev3000/",
		icon: Code2,
		label: (
			<>
				Rated <b className="font-bold text-charcoal">1525</b> on LeetCode
			</>
		),
	},
	{
		href: "https://www.kaggle.com/ashishk1331",
		icon: Trophy,
		label: (
			<>
				<b className="font-bold text-charcoal">Expert</b> on Kaggle
			</>
		),
	},
	{
		href: "https://dev.to/ashishk1331",
		icon: Sparkles,
		label: (
			<>
				<b className="font-bold text-charcoal">Tag Moderator</b> on Dev.to —
				curated 120+ JavaScript/React posts.
			</>
		),
	},
	{
		href: "https://gdg.community.dev/gdg-on-campus-kamla-nehru-institute-of-technology-sultanpur-india/",
		icon: Users,
		label: (
			<>
				<b className="font-bold text-charcoal">Co-organizer / Android lead</b>{" "}
				at GDG on Campus KNIT Sultanpur, India.
			</>
		),
	},
	{
		href: "https://badgr.com/public/assertions/s9oX8LzvR9iqpMY4JuMw-A",
		icon: BadgeCheck,
		label: <>Postman API Fundamentals Student Expert.</>,
	},
	{
		href: "https://drive.google.com/file/d/1kamacvwO63qf1Egq8ybyK6WLQSjbmD60/view?usp=sharing",
		icon: Medal,
		label: (
			<>
				Completed <b className="font-bold text-charcoal">NLP</b> (12 week)
				course by NPTEL & IIT Kharagpur.
			</>
		),
	},
	{
		href: "https://drive.google.com/file/d/1R1_OD_cVqLjjPRpPvF8x66kgdHluieh1/view?usp=sharing",
		icon: Award,
		label: (
			<>
				Completed <b className="font-bold text-charcoal">Cloud Computing</b> (12
				week) course by NPTEL & IIT Kharagpur.
			</>
		),
	},
	{
		href: "https://www.credly.com/users/ashishk1331/badges#credly",
		icon: Cloud,
		label: (
			<>
				Earned <b className="font-bold text-charcoal">10+ Google Cloud</b> Skill
				Badges across networking, IAM, Kubernetes, BigQuery, Pub/Sub and ML
				APIs.
			</>
		),
	},
];

export default function Achievements() {
	return (
		<Section
			id="achievements"
			eyebrow="Badges earned"
			title="achievements unlocked"
			subtitle="A little wall of trophies from competitions, communities and courses."
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{achievements.map(({ href, label, icon: Icon }, i) => (
					<a
						key={href}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="pop-card group flex items-start gap-3 rounded-2xl border-2 border-border bg-paper-white p-4"
					>
						<span
							className={`grid place-items-center size-11 shrink-0 rounded-full ${
								i % 2 === 0
									? "bg-storybook-green text-eager-green"
									: "bg-[#e0f4ff] text-spark-blue"
							}`}
						>
							<Icon size={20} />
						</span>
						<span className="text-pencil-gray text-[15px] leading-snug flex-1">
							{label}
						</span>
						<ExternalLink
							size={14}
							className="shrink-0 mt-1 text-faded-gray group-hover:text-spark-blue transition-colors"
						/>
					</a>
				))}
			</div>
		</Section>
	);
}
