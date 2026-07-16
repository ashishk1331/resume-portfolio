import { getPublishedBlogs } from "@/lib/blogUtil";
import BlogPost from "./BlogPost";

export default function MegaBlogs() {
	const blogs = getPublishedBlogs();

	return (
		<>
			<div className="w-full flex flex-col items-start gap-3 mb-12">
				<h1 className="font-feather text-eager-green text-[40px] md:text-[56px] leading-[1.1]">
					blogs.
				</h1>
				<p className="text-body text-pencil-gray">
					Ashish reads, implements and shares. Sometimes it&apos;s too hard not
					to.
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
				{blogs.map((blog) => (
					<BlogPost key={blog.slug} blog={blog} />
				))}
			</div>
		</>
	);
}
