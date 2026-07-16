import type { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren & {
	id?: string;
	eyebrow?: ReactNode;
	title: ReactNode;
	subtitle?: ReactNode;
};

export default function Section({
	id,
	eyebrow,
	title,
	subtitle,
	children,
}: SectionProps) {
	return (
		<section id={id} className="scroll-mt-24">
			<div className="flex flex-col items-center text-center gap-3 mb-10">
				{eyebrow && <span className="eyebrow">{eyebrow}</span>}
				<h2 className="font-feather text-eager-green text-[30px] sm:text-[36px] md:text-[48px] leading-[1.05]">
					{title}
				</h2>
				{subtitle && (
					<p className="text-body text-pencil-gray max-w-[520px]">{subtitle}</p>
				)}
			</div>
			{children}
		</section>
	);
}
