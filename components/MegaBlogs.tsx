import { getPublishedBlogs } from "@/lib/blogUtil";
import BlogPost from "./BlogPost";

export default function MegaBlogs() {
	const blogs = getPublishedBlogs();

	return (
		<>
			<div className="w-full flex flex-col items-left gap-4 mb-12">
				<h1 className="text-3xl md:text-4xl font-bold">Blogs</h1>
				<span>
					Ashish reads, implements and share. Sometimes it&apos;s too hard to
					not share.
				</span>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
				{blogs.map((blog) => (
					<BlogPost key={blog.slug} blog={blog} />
				))}
			</div>
		</>
	);
}
