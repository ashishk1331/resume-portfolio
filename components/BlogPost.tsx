import { type BlogMetadata } from "@/lib/blogUtil";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

type BlogProps = {
	blog: BlogMetadata;
};

export default function BlogPost({ blog }: BlogProps) {
	const { author, pubDate, title, description, banner, slug } = blog;
	const blogURL = `/blog/${slug}`;

	return (
		<div className="w-full h-auto flex flex-col break-inside-avoid text-sm">
			{banner && (
				<Image
					src={banner.substring(1)}
					alt={title}
					width={512}
					height={512}
					className="w-full object-cover aspect-video rounded-t-md shadow-xl"
				/>
			)}
			<div
				className={twMerge(
					"h-full flex flex-col items-left gap-2 p-4 bg-background rounded-b-md border-b-2 border-x-2 border-neutral-800",
					!banner && "border-2 rounded-md",
				)}
			>
				<div className="w-full flex items-center justify-between text-sm text-accent">
					<span>{author}</span>
					<span>{format(pubDate, "d MMMM yyyy")}</span>
				</div>
				<h1 className="text-xl mb-1">{title}</h1>
				<span className="mb-2">{description}</span>
				<a
					href={blogURL}
					rel="noopener noreferrer"
					className="inline-flex text-left items-center text-accent mt-auto"
				>
					<span className="inline font-medium">Read More</span>
					<ArrowRight size={12} className="inline-block align-middle ml-1" />
				</a>
			</div>
		</div>
	);
}
