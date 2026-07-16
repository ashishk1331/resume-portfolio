import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="grid grid-cols-6 gap-6 md:gap-8 p-2 py-16">
			<div className="col-span-full md:col-span-2 md:text-right flex flex-col">
				<h1 className="font-feather text-eager-green text-[48px] leading-none">
					404
				</h1>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-4">
				<p className="text-body text-pencil-gray">No such route exists.</p>
				<Link href="/" className="duo-btn duo-btn--primary">
					<ArrowLeft size={16} />
					<span>Go Back</span>
				</Link>
			</div>
		</div>
	);
}
