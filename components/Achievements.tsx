import { ExternalLink } from "lucide-react";

const achievements = [
	{
		href: "https://leetcode.com/u/flangdev3000/",
		label: (
			<>
				Rated <b className="font-medium">1525</b> on Leetcode
			</>
		),
	},
	{
		href: "https://www.kaggle.com/ashishk1331",
		label: (
			<>
				<b className="font-medium">Expert</b> on Kaggle
			</>
		),
	},
	{
		href: "https://gdg.community.dev/gdg-on-campus-kamla-nehru-institute-of-technology-sultanpur-india/",
		label: (
			<>
				<b className="font-medium">Co-organizer/ Android lead</b> at GDG on
				Campus KNIT Sultanpur, India.
			</>
		),
	},
	{
		href: "https://badgr.com/public/assertions/s9oX8LzvR9iqpMY4JuMw-A",
		label: <>Postman API Fundamentals Student Expert</>,
	},
	{
		href: "https://drive.google.com/file/d/1kamacvwO63qf1Egq8ybyK6WLQSjbmD60/view?usp=sharing",
		label: (
			<>
				Completed <b className="font-medium">Natural Language Processing</b> (12
				week) course by NPTEL and IIT Kharagpur.
			</>
		),
	},
	{
		href: "https://drive.google.com/file/d/1R1_OD_cVqLjjPRpPvF8x66kgdHluieh1/view?usp=sharing",
		label: (
			<>
				Completed <b className="font-medium">Cloud Computing</b> (12 week)
				course by NPTEL and IIT Kharagpur.
			</>
		),
	},
	{
		href: "https://www.credly.com/users/ashishk1331/badges#credly",
		label: (
			<>
				Earned 10+ <b className="font-medium">Google Cloud</b> Skill Badges
				demonstrating hands-on expertise in cloud networking, IAM, Compute
				Engine, Kubernetes, BigQuery, Cloud Monitoring, Looker Studio, Pub/Sub,
				App Dev, and ML APIs using real-world labs.
			</>
		),
	},
];

export default function Achievements() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right flex flex-col">
				<h3 className="font-medium text-lg">じっせき</h3>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-1 [&_a]:hover:underline">
				<p>
					マシンラーニング、クラウドコンピューティング、APIかいはつ、きょうそうプログラミング、コミュニティかつどうにおいて、たすうのにんていしかくとじっせきをほゆう。
				</p>
			</div>
			<div className="col-span-full md:col-span-2 md:text-right">
				<a href="#achievements">
					<h3 className="font-medium text-lg">Achievements</h3>
				</a>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-2 text-sm [&_a]:hover:underline">
				{achievements.map(({ href, label }, idx) => (
					<a
						key={idx}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="inline text-left"
					>
						<span className="inline">{label}</span>
						<ExternalLink
							size={12}
							className="inline-block align-middle text-neutral-400 ml-1"
						/>
					</a>
				))}
			</div>
		</div>
	);
}
