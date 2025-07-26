import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Define your metadata interface
interface BlogMetadata {
	title: string;
	slug: string;
	pubDate: string;
	draft?: boolean;
	description: string;
	author: string;
	hasAudio?: boolean;
}

// Method 1: Extract metadata from file system
export function getBlogMetadata(slug: string): BlogMetadata | null {
	try {
		const filePath = path.join(process.cwd(), "blogs", `${slug}.mdx`);
		const fileContent = fs.readFileSync(filePath, "utf8");

		// Use gray-matter to parse frontmatter and content
		const { data } = matter(fileContent);

		return data as BlogMetadata;
	} catch (error) {
		console.error(`Error reading metadata for ${slug}:`, error);
		return null;
	}
}

// Method 2: Extract content without frontmatter (if needed)
export function getBlogContent(
	slug: string,
): { metadata: BlogMetadata; content: string } | null {
	try {
		const filePath = path.join(process.cwd(), "blogs", `${slug}.mdx`);
		const fileContent = fs.readFileSync(filePath, "utf8");

		// Parse with gray-matter
		const { data, content } = matter(fileContent);

		return {
			metadata: data as BlogMetadata,
			content: content, // This is the content WITHOUT frontmatter
		};
	} catch (error) {
		console.error(`Error reading content for ${slug}:`, error);
		return null;
	}
}

// Method 3: Get all blog files and their metadata
export function getAllBlogsWithMetadata(): Array<
	BlogMetadata & { slug: string }
> {
	const blogsDir = path.join(process.cwd(), "blogs");

	if (!fs.existsSync(blogsDir)) {
		console.warn("Blogs directory not found:", blogsDir);
		return [];
	}

	const files = fs
		.readdirSync(blogsDir)
		.filter((file) => file.endsWith(".mdx"));

	return files
		.map((file) => {
			const slug = file.replace(".mdx", "");
			const metadata = getBlogMetadata(slug);
			return metadata ? { ...metadata, slug } : null;
		})
		.filter(Boolean) as Array<BlogMetadata & { slug: string }>;
}

// Method 4: Get published blogs only
export function getPublishedBlogs(): Array<BlogMetadata & { slug: string }> {
	return getAllBlogsWithMetadata()
		.filter((blog) => !blog.draft)
		.sort(
			(a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
		);
}
