import { format } from "date-fns";
import { ArrowLeft, Dot } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import rehypePrismPlus from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import { getBlogContent } from "@/lib/blogUtil";
import "@/styles/prism-supabase.css";
import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Article from "@/components/blocks/Article";

const CustomImage = ({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) => {
	if (!src) return null;

	const imageSRC = typeof src === "string" ? src.substring(1) : "";
	return (
		<Image
			src={imageSRC}
			alt={alt || ""}
			width={800}
			height={400}
			className="w-full h-auto object-cover rounded"
		/>
	);
};

const CustomPre = ({ children, ...props }: HTMLAttributes<HTMLPreElement>) => {
	const languageMatch = props.className?.match(/language-(\w+)/);
	const language = languageMatch ? languageMatch[1] : null;

	return (
		<div>
			{language && <div className="pre-div">{language}</div>}
			<pre {...props}>{children}</pre>
		</div>
	);
};

export default async function Blog({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const blog = getBlogContent(slug);
	if (!blog) return notFound();
	const { metadata, content } = blog;
	return (
		<>
			<Breadcrumbs
				items={[
					{
						id: "home",
						label: <span>Home</span>,
						href: "/",
					},
					{
						id: "blogs",
						label: <span>Blogs</span>,
						href: "/blog",
					},
					{
						id: "individual-blog",
						label: <span>{metadata.title}</span>,
						href: `/blog/${metadata.slug}`,
					},
				]}
			/>
			<div className="flex flex-col items-start gap-4 my-12">
				<h1 className="text-2xl md:text-4xl font-bold">{metadata.title}</h1>
				<div className="flex text-lg items-center gap-2 text-neutral-500">
					<p>{metadata.author}</p>
					<Dot size={16} />
					<p>{format(metadata.pubDate, "MMMM d, yyyy")}</p>
				</div>
			</div>
			<Article>
				<Markdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypePrismPlus]}
					components={{
						img: CustomImage,
						pre: CustomPre,
					}}
				>
					{content}
				</Markdown>
			</Article>
		</>
	);
}
