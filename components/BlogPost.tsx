import { format } from "date-fns";
import { ArrowRight, Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogMetadata } from "@/lib/blogUtil";

type BlogProps = {
	blog: BlogMetadata;
};

export default function BlogPost({ blog }: BlogProps) {
	const { author, pubDate, title, description, slug, draft } = blog;
	const blogURL = `/blog/${slug}`;

	return (
		<Link
			href={blogURL}
			className="group relative w-full h-auto flex flex-col break-inside-avoid overflow-hidden rounded-xl border-2 border-border transition-colors hover:border-eager-green"
		>
			{draft && (
				<div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-xl bg-storybook-green inline-flex items-center gap-1 text-caption font-bold uppercase tracking-[0.053em] text-eager-green">
					<Circle size={10} className="stroke-transparent fill-eager-green" />
					Draft
				</div>
			)}
			<Image
				src={`/assets/${blog.slug}/banner.webp`}
				alt={title}
				width={512}
				height={512}
				className="w-full object-cover aspect-video"
			/>
			<div className="h-full flex flex-col items-start gap-2 p-5 bg-paper-white">
				<div className="w-full flex items-center justify-between text-caption font-bold uppercase tracking-[0.053em] text-spark-blue">
					<span>{author}</span>
					<span>{format(pubDate, "d MMMM yyyy")}</span>
				</div>
				<h3 className="text-subheading font-bold text-charcoal group-hover:text-spark-blue transition-colors">
					{title}
				</h3>
				<p className="text-pencil-gray">{description}</p>
				<span className="inline-flex text-left items-center gap-1 text-spark-blue font-bold mt-auto group-hover:underline">
					Read More
					<ArrowRight size={14} className="inline-block align-middle" />
				</span>
			</div>
		</Link>
	);
}
