import { ImageResponse } from "next/og";
import { site } from "@/constants/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Rendered once at build time, in the same blue-on-paper palette as the site. */
export default function OpenGraphImage() {
	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				backgroundColor: "#efefff",
				color: "#2020db",
				padding: "72px 80px",
				fontFamily: "serif",
			}}
		>
			<div style={{ fontSize: 22, letterSpacing: 4, color: "#6161b2" }}>
				ASHISH KHARE
			</div>

			<div style={{ display: "flex", flexDirection: "column" }}>
				<div style={{ fontSize: 62, lineHeight: 1.15, maxWidth: 980 }}>
					Software engineer building products, systems and AI agents.
				</div>
			</div>

			<div
				style={{
					display: "flex",
					gap: 24,
					fontSize: 22,
					color: "#4c4ca0",
					borderTop: "1px solid #d8d8f4",
					paddingTop: 28,
				}}
			>
				<span>Go</span>
				<span>·</span>
				<span>Python</span>
				<span>·</span>
				<span>TypeScript</span>
				<span>·</span>
				<span>ashishk1331.vercel.app</span>
			</div>
		</div>,
		size,
	);
}
