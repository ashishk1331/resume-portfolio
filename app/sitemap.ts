import type { MetadataRoute } from "next";
import { featuredProjects } from "@/constants/projects";
import { site } from "@/constants/site";
import { getPublishedBlogs } from "@/lib/blogUtil";

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes = ["", "/about"].map((route) => ({
		url: `${site.url}${route}`,
		lastModified: new Date(),
		priority: route === "" ? 1 : 0.8,
	}));

	const projects = featuredProjects
		.filter((project) => project.caseStudy?.length)
		.map((project) => ({
			url: `${site.url}/projects/${project.slug}`,
			lastModified: new Date(),
			priority: 0.8,
		}));

	const posts = getPublishedBlogs().map((post) => ({
		url: `${site.url}/blog/${post.slug}`,
		lastModified: new Date(post.pubDate),
		priority: 0.6,
	}));

	return [...staticRoutes, ...projects, ...posts];
}
