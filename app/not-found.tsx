import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right flex flex-col">
				<h3 className="font-medium text-lg">404</h3>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-2">
				<p>No such route exists.</p>
				<Link
					href="/"
					className="flex items-center gap-2 mb-12 px-2 py-1 rounded cursor-pointer active:scale-95 transition no-underline w-fit font-medium
             bg-[var(--color-accent)]
             text-[var(--color-black-main)]
             border border-[var(--color-accent)]
             hover:bg-[var(--color-accent-hover)]
             hover:border-[var(--color-accent-hover)]"
				>
					<ArrowLeft size={16} />
					<span className="text-sm">Go Back</span>
				</Link>
			</div>
		</div>
	);
}
