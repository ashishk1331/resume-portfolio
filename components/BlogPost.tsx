import { type BlogMetadata } from "@/lib/blogUtil";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowRight, Circle } from "lucide-react";

type BlogProps = {
	blog: BlogMetadata;
};

export default function BlogPost({ blog }: BlogProps) {
	const { author, pubDate, title, description, slug, draft } = blog;
	const blogURL = `/blog/${slug}`;

	return (
		<Link
			href={blogURL}
			className="group relative w-full h-auto flex flex-col break-inside-avoid text-sm overflow-hidden no-underline hover:no-underline"
		>
			{draft && (
				<div className="absolute top-0 left-0 px-3 py-2 rounded-br-md bg-neutral-800/50 backdrop-blur inline-flex items-center gap-1">
					<Circle size={12} className="stroke-transparent fill-emerald-500" />
					Draft
				</div>
			)}
			<Image
				src={`/assets/${blog.slug}/banner.webp`}
				alt={title}
				width={512}
				height={512}
				className="w-full object-cover aspect-video rounded-t-md shadow-xl"
			/>
			<div className="h-full flex flex-col items-left gap-2 p-4 bg-background rounded-b-md border-b-2 border-x-2 border-neutral-800">
				<div className="w-full flex items-center justify-between text-sm text-accent">
					<span>{author}</span>
					<span>{format(pubDate, "d MMMM yyyy")}</span>
				</div>
				<h1 className="text-xl mb-1">{title}</h1>
				<span className="mb-2">{description}</span>
				<span className="inline-flex text-left items-center text-accent mt-auto group-hover:underline">
					<span className="inline font-medium">Read More</span>
					<ArrowRight size={12} className="inline-block align-middle ml-1" />
				</span>
			</div>
		</Link>
	);
}
