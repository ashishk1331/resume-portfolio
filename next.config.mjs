import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Allow .mdx extensions for files
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	async redirects() {
		return [
			// The writing index now lives on the homepage; the old /blog URL has
			// been shared publicly, so keep it working. Individual posts at
			// /blog/<slug> are untouched.
			{ source: "/blog", destination: "/#writing", permanent: true },
		];
	},
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	extension: /\.(md|mdx)$/,
});

// Combine MDX and Next.js config
export default withMDX(nextConfig);
