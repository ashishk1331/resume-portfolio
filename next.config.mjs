import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Allow .mdx extensions for files
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	extension: /\.(md|mdx)$/,
});

// Combine MDX and Next.js config
export default withMDX(nextConfig);
