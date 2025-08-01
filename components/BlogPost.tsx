import { type BlogMetadata } from "@/lib/blogUtil";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

type BlogProps = {
	blog: BlogMetadata;
};

export default function BlogPost({ blog }: BlogProps) {
	const { author, pubDate, title, description, banner, slug } = blog;
	const blogURL = `/blog/${slug}`;

	return (
		<div className="w-full flex flex-col mb-8 break-inside-avoid text-sm">
			{banner && (
				<Image
					src={banner.substring(1)}
					alt={title}
					width={512}
					height={512}
					className="w-full object-cover aspect-video rounded-t-md shadow-xl"
				/>
			)}
			<div className="flex flex-col items-left gap-2 p-4 bg-neutral-50 rounded-b-md">
				<div className="w-full flex items-center justify-between text-sm">
					<span className="text-blue-600">{author}</span>
					<span>{format(pubDate, "d MMMM yyyy")}</span>
				</div>
				<h1 className="text-xl mb-1">{title}</h1>
				<span>{description}</span>
				<a
					href={blogURL}
					rel="noopener noreferrer"
					className="inline-flex text-left items-center text-blue-500 mt-2"
				>
					<span className="inline font-medium">Read More</span>
					<ArrowRight size={12} className="inline-block align-middle ml-1" />
				</a>
			</div>
		</div>
	);
}
