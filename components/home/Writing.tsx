import BlogRow from "@/components/BlogRow";
import Section from "@/components/ui/Section";
import { getPublishedBlogs } from "@/lib/blogUtil";

export default function Writing() {
	const posts = getPublishedBlogs();

	return (
		<Section id="writing" label="Writing">
			<p className="mb-8 max-w-[58ch] leading-relaxed text-muted">
				An engineering notebook — papers implemented to understand them, systems
				taken apart, and notes from things that broke in production.
			</p>
			<ul className="space-y-3">
				{posts.map((post) => (
					<BlogRow key={post.slug} blog={post} />
				))}
			</ul>
		</Section>
	);
}
