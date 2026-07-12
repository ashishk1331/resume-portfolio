import { Dot } from "lucide-react";

export default function Experience() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right">
				<a href="#experience">
					<h3 className="font-medium text-lg">Experience</h3>
				</a>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-8 text-sm">
				<div className="flex flex-col items-start gap-2">
					<div className="flex items-start gap-2">
						<h3 className="font-medium text-lg">Quinn</h3>
						<h3 className="text-lg text-accent">Software Engineer</h3>
					</div>
					<p>
						Designed a closed-loop agentic QC pipeline that self-corrects prompts
						via feedback, accelerating QA workflows by 3×. Built an OCR pipeline
						with Gemini and BullMQ for product metadata extraction at 96%
						accuracy, a spatially-aware background engine that cut visual
						artifacts by 60%, and scaled the Shopify plugin platform with
						reusable templates to onboard 10+ customers.
					</p>
					<div className="flex items-center gap-1 text-accent">
						<p>Sep 2025 – Present</p>
						<Dot size={16} />
						<p>Remote - Bengaluru</p>
					</div>
				</div>

				<div className="flex flex-col items-start gap-2">
					<div className="flex items-start gap-2">
						<h3 className="font-medium text-lg">Stoira</h3>
						<h3 className="text-lg text-accent">SDE Intern</h3>
					</div>
					<p>
						Optimized list rendering with FlashList to hit 60fps, engineered a
						full-featured audio system with queue management and lockscreen
						controls, shipped multi-provider auth with deep linking, and built a
						cross-platform UI system of 20+ reusable components in Unistyles.
					</p>
					<div className="flex items-center gap-1 text-accent">
						<p>Jul 2024 – Sep 2024</p>
						<Dot size={16} />
						<p>Remote - Bengaluru</p>
					</div>
				</div>

				<div className="flex flex-col items-start gap-2">
					<div className="flex items-start gap-2">
						<h3 className="font-medium text-lg">FrontendHire</h3>
						<h3 className="text-lg text-accent">Design Engineer Intern</h3>
					</div>
					<p>
						Engineered a React Query + Zustand data layer for a React Native app,
						crafted pixel-perfect screens and a reusable design system, and built
						a markdown platform with a custom Remark plugin and a Satori-powered
						Figma-to-banner pipeline.
					</p>
					<div className="flex items-center gap-1 text-accent">
						<p>May 2024 – Jun 2024</p>
						<Dot size={16} />
						<p>Remote - Hyderabad</p>
					</div>
				</div>
			</div>
		</div>
	);
}
