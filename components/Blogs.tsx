import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getPublishedBlogs } from "@/lib/blogUtil";
import BlogPost from "./BlogPost";
import Section from "./Section";

export default function Blogs() {
	const blogs = getPublishedBlogs().slice(0, 4);

	return (
		<Section
			id="blogs"
			eyebrow="From the notebook"
			title="reads & write-ups"
			subtitle="Ashish reads, implements and shares. Sometimes it's too hard not to."
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				{blogs.map((blog) => (
					<BlogPost key={blog.slug} blog={blog} />
				))}
			</div>
			<div className="flex justify-center mt-8">
				<Link href="/blog/" className="duo-btn duo-btn--primary">
					Read all posts
					<ArrowRight size={16} />
				</Link>
			</div>
		</Section>
	);
}
