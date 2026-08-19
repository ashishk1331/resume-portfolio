import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import rehypePrismPlus from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import { getAllBlogsSlug, getBlogContent } from "@/lib/blogUtil";
import "@/styles/prism-supabase.css";
import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import Article from "@/components/blocks/Article";
import { site } from "@/constants/site";

const CustomImage = ({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) => {
	if (!src) return null;

	const imageSRC = typeof src === "string" ? src.substring(1) : "";
	return (
		<Image
			src={imageSRC}
			alt={alt || ""}
			width={800}
			height={400}
			className="h-auto w-full border border-border object-cover"
		/>
	);
};

/** Markdown tables can be wider than a phone; give them their own scroller so
 *  they never widen the page itself. */
const CustomTable = ({
	children,
	...props
}: HTMLAttributes<HTMLTableElement>) => (
	<div className="-mx-1 overflow-x-auto px-1">
		<table {...props}>{children}</table>
	</div>
);

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

/** Derived from the post itself — not a number anyone typed in. */
function readingTime(content: string) {
	const words = content.trim().split(/\s+/).length;
	return Math.max(1, Math.round(words / 220));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
	const { slug } = await params;
	const blog = getBlogContent(slug);
	if (!blog) return {};

	const { metadata } = blog;
	const image = `/assets/${slug}/banner.webp`;

	return {
		title: metadata.title,
		description: metadata.description,
		alternates: { canonical: `/blog/${slug}` },
		openGraph: {
			type: "article",
			title: metadata.title,
			description: metadata.description,
			url: `/blog/${slug}`,
			publishedTime: new Date(metadata.pubDate).toISOString(),
			authors: [metadata.author ?? site.name],
			images: [{ url: image }],
		},
		twitter: {
			card: "summary_large_image",
			title: metadata.title,
			description: metadata.description,
			images: [image],
		},
	};
}

export default async function Blog({ params }: Params) {
	const { slug } = await params;
	const blog = getBlogContent(slug);
	if (!blog) return notFound();

	const { metadata, content } = blog;
	const minutes = readingTime(content);

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: metadata.title,
		description: metadata.description,
		datePublished: new Date(metadata.pubDate).toISOString(),
		author: { "@type": "Person", name: metadata.author ?? site.name },
		image: `${site.url}/assets/${slug}/banner.webp`,
		url: `${site.url}/blog/${slug}`,
	};

	return (
		<div className="rise">
			<Link
				href="/#writing"
				className="-my-1 inline-flex items-center gap-1.5 py-1 text-[0.9rem] italic text-muted transition-colors hover:text-ink"
			>
				<ArrowLeft size={14} aria-hidden="true" />
				Writing
			</Link>

			<header className="mt-8 mb-10 flex flex-col items-start gap-4">
				<h1 className="text-3xl font-normal leading-tight tracking-[-0.01em] text-ink md:text-[2.6rem]">
					{metadata.title}
				</h1>
				<div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-faint">
					<time dateTime={new Date(metadata.pubDate).toISOString()}>
						{format(metadata.pubDate, "MMMM d, yyyy")}
					</time>
					<span aria-hidden="true" className="text-border-strong">
						·
					</span>
					<span>{minutes} min read</span>
					{metadata.draft && (
						<>
							<span aria-hidden="true" className="text-border-strong">
								·
							</span>
							<span>Draft</span>
						</>
					)}
				</div>
			</header>

			<Article>
				<Image
					src={`/assets/${metadata.slug}/banner.webp`}
					width={1024}
					height={576}
					priority
					alt={`Banner for ${metadata.title}`}
					className="h-auto w-full border border-border object-cover"
				/>
				<Markdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypePrismPlus]}
					components={{
						img: CustomImage,
						pre: CustomPre,
						table: CustomTable,
					}}
				>
					{content}
				</Markdown>
			</Article>

			<div className="mt-14 border-t border-border pt-6">
				<Link
					href="/#writing"
					className="-my-1 inline-flex items-center gap-1.5 py-1 text-[0.95rem] italic underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
				>
					<ArrowLeft size={14} aria-hidden="true" />
					All writing
				</Link>
			</div>

			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: static, non-user JSON-LD
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>
		</div>
	);
}

/** Any slug not returned by generateStaticParams 404s rather than being
 *  rendered on demand — this is what keeps drafts off the live site. */
export const dynamicParams = false;

export async function generateStaticParams() {
	return getAllBlogsSlug();
}
