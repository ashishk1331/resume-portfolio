import { ArrowRight } from "lucide-react";
import { getPublishedBlogs } from "@/lib/blogUtil";
import BlogPost from "./BlogPost";
import Link from "next/link";

export default function Blogs() {
	const blogs = getPublishedBlogs().slice(0, 4);

	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right">
				<a href="#blogs">
					<h3 className="font-medium text-lg">Blogs</h3>
				</a>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start [&_a]:hover:underline gap-4">
				{blogs.map((blog) => (
					<BlogPost key={blog.slug} blog={blog} />
				))}
				<Link
					href="/blog/"
					rel="noopener noreferrer"
					className="inline-flex w-full text-center justify-center-safe gap-1 items-center p-2 rounded-md border-2 border-neutral-800"
				>
					<span className="inline">View all</span>
					<ArrowRight
						size={12}
						className="inline-block align-middle text-neutral-400 ml-1"
					/>
				</Link>
			</div>
		</div>
	);
}
