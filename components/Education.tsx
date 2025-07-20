import { Dot } from "lucide-react";

export default function Education() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right">
				<h3 className="font-medium text-lg">Education</h3>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-8 text-sm">
				<div className="flex flex-col items-start gap-2">
					<div className="flex items-start gap-2">
						<h3 className="font-medium text-lg">KNIT Sultanpur</h3>
						<h3 className="font-medium text-lg text-neutral-400">25&apos; batch</h3>
					</div>
					<p>
						Bachelor of Science in Computer Science and Engineering
					</p>
					<div className="flex items-center gap-1 text-neutral-400">
						<p>Cumulative GPA: 8.6</p>
						<Dot size={16} />
						<p>Div-I (Hons)</p>
					</div>
				</div>
			</div>
		</div>
	);
}
