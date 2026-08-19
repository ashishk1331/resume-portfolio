import Section from "@/components/ui/Section";
import { skills } from "@/constants/experience";

export default function Skills() {
	return (
		<Section id="stack" label="Stack">
			<dl className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
				{skills.map(({ label, items }) => (
					<div key={label}>
						<dt className="eyebrow">{label}</dt>
						<dd className="mt-3 text-[0.95rem] leading-relaxed text-ink/90">
							{items.join(", ")}
						</dd>
					</div>
				))}
			</dl>
		</Section>
	);
}
