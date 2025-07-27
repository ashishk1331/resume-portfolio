import { format } from "date-fns";
import { ExternalLink } from "lucide-react";
import { getPublishedBlogs } from "@/lib/blogUtil";

export default function Blogs() {
	const blogs = getPublishedBlogs();

	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right">
				<a href="#blogs">
					<h3 className="font-medium text-lg">Blogs</h3>
				</a>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-2 [&_a]:hover:underline">
				{blogs.map(({ title, slug, pubDate }) => (
					<a
						key={slug}
						href={`/blog/${slug}`}
						rel="noopener noreferrer"
						className="inline-flex text-left gap-2 items-center"
					>
						<span className="inline font-medium">
							{format(pubDate, "yyyy MM")}
						</span>
						<span className="inline">{title}</span>
						<ExternalLink
							size={12}
							className="inline-block align-middle text-neutral-400 ml-1"
						/>
					</a>
				))}
			</div>
		</div>
	);
}
