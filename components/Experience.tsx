import { Dot } from "lucide-react";

export default function Experience() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right">
				<h3 className="font-medium text-lg">Experience</h3>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-8 text-sm">
				<div className="flex flex-col items-start gap-2">
					<div className="flex items-start gap-2">
						<h3 className="font-medium text-lg">Stoira</h3>
						<h3 className="text-lg text-neutral-400">SDE Intern</h3>
					</div>
					<p>
						Built a performant mobile app and web features with animations,
						audio, and a modular design system using React Native and Next.js.
					</p>
					<div className="flex items-center gap-1 text-neutral-400">
						<p>Jul 2024 – Sep 2024</p>
						<Dot size={16} />
						<p>Remote - Bengluru</p>
					</div>
				</div>

				<div className="flex flex-col items-start gap-2">
					<div className="flex items-start gap-2">
						<h3 className="font-medium text-lg">FrontendHire</h3>
						<h3 className="text-lg text-neutral-400">Design Engineer Intern</h3>
					</div>
					<p>
						Converted Figma designs to React Native screens and launched a
						markdown blog system using Remark and Supabase.
					</p>
					<div className="flex items-center gap-1 text-neutral-400">
						<p>May 2024 – Jun 2024</p>
						<Dot size={16} />
						<p>Remote - Hyderabad</p>
					</div>
				</div>

				<div className="flex flex-col items-start gap-2">
					<div className="flex items-start gap-2">
						<h3 className="font-medium text-lg">
							Ramraj Services Private Limited
						</h3>
						<h3 className="text-lg text-neutral-400">SDE Intern</h3>
					</div>
					<p>
						Optimized Django APIs and PostgreSQL queries to improve backend
						performance.
					</p>
					<div className="flex items-center gap-1 text-neutral-400">
						<p>Apr 2024 – May 2024</p>
						<Dot size={16} />
						<p>Remote - Noida</p>
					</div>
				</div>
			</div>
		</div>
	);
}
