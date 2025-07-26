import { format } from "date-fns";
import { ArrowLeft, Dot } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import rehypePrismPlus from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import { getBlogContent } from "@/lib/blogUtil";
// Import Prism CSS theme
import "prismjs/themes/prism-coy.css"; // Dark theme
import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import Link from "next/link";

// Custom Image Component
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
	return (
		<pre
			className="my-6 overflow-x-auto rounded-lg border bg-gray-900 p-4"
			{...props}
		>
			{children}
		</pre>
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
			<Link
				href="/"
				className="flex items-center gap-2 mb-12 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded cursor-pointer active:scale-90 transition no-underline w-fit font-normal"
			>
				<ArrowLeft size={16} />
				<span>Go Back</span>
			</Link>
			<h1>{metadata.title}</h1>
			<span className="flex items-center gap-2">
				<p>{metadata.author}</p>
				<Dot size={16} />
				<p>{format(metadata.pubDate, "d MMM yyyy")}</p>
			</span>
			<article className="prose prose-lg max-w-none">
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
			</article>
		</>
	);
}
