import { ChevronRight } from "lucide-react";
import { type ReactNode } from "react";

type BreadcrumbsProps = {
	items: { id: string; label: ReactNode; href: string }[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
	const collection: ReactNode[] = [];

	for (let i = 0; i < items.length; i++) {
		const { id, label, href } = items[i];
		if (i === items.length - 1) {
			collection.push(
				<span
					key={id}
					className="inline-flex text-left gap-1 items-center text-neutral-400 no-underline font-normal"
				>
					{label}
				</span>,
			);
		} else {
			collection.push(
				<a
					key={id}
					href={href}
					rel="noopener noreferrer"
					className="inline-flex text-left gap-1 items-center text-neutral-400 no-underline font-normal"
				>
					{label}
				</a>,
			);
		}
		if (i < items.length - 1)
			collection.push(
				<ChevronRight
					key={id + i}
					size={16}
					className="inline-block align-middle text-neutral-400 mx-1"
				/>,
			);
	}

	return <div className="flex items-center gap-2">{collection}</div>;
}
