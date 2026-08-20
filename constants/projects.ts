export type ProjectLink = { label: string; href: string };

export type CaseStudySection = {
	heading: string;
	/** Rendered as paragraphs; keep each one short. */
	body?: string[];
	/** Rendered as a bulleted list under the paragraphs. */
	points?: string[];
};

export type Project = {
	slug: string;
	title: string;
	/** Short category line shown under the title. */
	category: string;
	/** One or two sentences — used on the homepage card and in metadata. */
	summary: string;
	/** Three scannable capability lines for the homepage card. */
	highlights: string[];
	stack: string[];
	links: ProjectLink[];
	/** Present only where there is enough verified detail to justify a page. */
	caseStudy?: CaseStudySection[];
};

/**
 * The three projects the homepage is built around. Everything here is taken
 * from the shipped product, its README or its docs — no invented metrics.
 */
export const featuredProjects: Project[] = [
	{
		slug: "seline",
		title: "Seline",
		category: "AI Harness Platform",
		summary:
			"A Go platform that runs a personal AI agent for every user inside its own container — booted on signup, kept alive between tasks, and driven over Telegram.",
		highlights: [
			"One isolated container per user, spawned on signup and lifecycle-managed from there",
			"Always-on execution with configurable heartbeats, scheduled jobs and mid-task interrupts",
			"Sub-agents, an entity graph and a compacting memory layer behind a tool-calling loop",
		],
		stack: ["Go", "Gin", "Docker", "PostgreSQL", "TypeScript", "Next.js"],
		links: [{ label: "meetseline.com", href: "https://meetseline.com/" }],
		caseStudy: [
			{
				heading: "Problem",
				body: [
					"Most agent products run every user's work inside one shared process. That is fine until an agent needs to hold long-lived state, run shell commands, keep API keys around and stay online between conversations — at which point one user's session is one bad tool call away from touching another's.",
					"Seline takes the opposite position: the unit of isolation is the user, not the request. Each person gets their own runtime, and the platform's job is to schedule, supervise and tear those runtimes down.",
				],
			},
			{
				heading: "Container isolation",
				body: [
					"Signing up provisions a container that belongs to exactly one user. Conversation history, notes and working files live inside it, and secrets — model provider keys, bot tokens — are encrypted at rest rather than held in a shared store.",
					"Access is gated by an allowlist, so only approved accounts can reach a given agent, and destructive actions are held behind an explicit confirmation.",
				],
			},
			{
				heading: "Agent execution",
				body: [
					"The agent is reachable over Telegram and behaves like a colleague you delegate to: it searches the web, reads and summarises pages, runs commands and writes notes back to its own filesystem.",
					"Longer jobs are decomposed into sub-agents that run in parallel with their progress visible, and any running task can be paused or killed outright — interrupts are a first-class operation, not a timeout.",
				],
			},
			{
				heading: "Lifecycle & orchestration",
				body: [
					"Between tasks a container idles cheaply; work is triggered by an inbound message, a scheduled job or a heartbeat check, and how aggressive that polling gets is left to the user.",
					"Memory is treated as a lifecycle problem too — older history is compacted over time so context stays relevant instead of growing without bound.",
				],
			},
			{
				heading: "Technology choices",
				points: [
					"Go for the agent runtime and orchestration layer — long-lived processes, cheap concurrency and a small container footprint.",
					"Gin and PostgreSQL behind the control plane that owns accounts, connectors and container state.",
					"Docker as the isolation boundary, so the same image runs hosted or self-hosted with no second code path.",
					"Next.js and TypeScript for the marketing surface and dashboard.",
					"Bring-your-own model provider — OpenRouter, Cerebras, NVIDIA and Sarvam are wired in as connectors rather than a hard dependency on one vendor.",
				],
			},
			{
				heading: "Tradeoffs",
				body: [
					"A container per user is more expensive than a shared worker pool, and it makes idle cost the thing you have to engineer around rather than throughput. It buys a security story that is easy to explain and a self-hosting path that is the same code, which for a product whose whole premise is holding your keys and your context was the trade worth making.",
					"Seline is in early access — v0.1, invite-only — and is still changing week to week.",
				],
			},
		],
	},
	{
		slug: "radius",
		title: "Radius",
		category: "Bookmark Search & MCP Server",
		summary:
			"A self-hosted Python MCP server that turns a flat pile of saved bookmarks into a relational corpus an AI agent can actually query.",
		highlights: [
			"FTS5 lexical search and RapidFuzz similarity over real tables, not a JSON blob",
			"Streamable-HTTP MCP server built on FastMCP, guarded by RS256 JWTs and per-tool scopes",
			"Runs locally or as a single Python function on Vercel against one Turso database",
		],
		stack: [
			"Python",
			"FastMCP",
			"Turso / libSQL",
			"SQLite FTS5",
			"RapidFuzz",
			"JWT",
			"Vercel",
		],
		links: [
			{
				label: "half-the-diameter.vercel.app",
				href: "https://half-the-diameter.vercel.app/",
			},
			{ label: "GitHub", href: "https://github.com/ashishk1331/radius" },
		],
		caseStudy: [
			{
				heading: "Problem",
				body: [
					"Bookmarks are a bet on your future self that usually loses. What you get back is a flat list with no real search and no way to see how anything relates to anything else.",
					"Radius makes that corpus queryable — you ask an agent what have I saved about X and get an answer grounded in your own data, not the open web.",
				],
			},
			{
				heading: "Ingestion",
				body: [
					"Radius never scripts a login and never stores a password, which has a deliberate consequence: it ships no exporter. You bring the JSON from whatever tool already holds your session, and ingestion takes it from there.",
					"Rows are upserted by id into real relational tables — authors, posts, media — so re-running over an overlapping export is idempotent and safe on a schedule.",
				],
			},
			{
				heading: "Search architecture",
				body: [
					"Storage is one Turso (libSQL) database, read by your laptop and your deployment alike, so there is nothing to keep in step between the two.",
					"Two retrieval modes sit on top of it: SQLite FTS5 for exact lexical matching, and RapidFuzz similarity for the queries where you half-remember the wording. Writes only ever happen locally from the ingestion job; the served process opens the database read-only.",
				],
			},
			{
				heading: "MCP interface",
				body: [
					"The server speaks streamable-HTTP MCP via FastMCP and exposes two tools — fetch_bookmarks and whoami. Neither is meant to be called by hand: you ask a client in plain language, and it picks the tool and fills the arguments.",
				],
			},
			{
				heading: "Authentication",
				body: [
					"Tokens are RS256 JWTs signed by a locally generated key pair and verified against a published JWKS, so nothing about an issued token is stored server-side — it carries an expiry and a scope, and that is all.",
					"Authorization is per-tool: a token opens only what it was minted for. An unauthenticated call to the MCP endpoint gets a 401 with a WWW-Authenticate challenge; only /health is public.",
				],
			},
			{
				heading: "Deployment",
				body: [
					"The whole server deploys as a single Python function on Vercel, or runs locally behind a CLI — keys init, migrate, ingest, token issue, serve. Leaving the Turso URL unset falls back to a local file, which is what offline work and the test suite use.",
				],
			},
		],
	},
	{
		slug: "playgroundish",
		title: "Playgroundish",
		category: "Coding Practice Platform",
		summary:
			"A full-stack practice platform built around messy, real-world engineering problems — an in-browser editor and submission flow on one side, an authoring portal on the other.",
		highlights: [
			"Interactive in-browser code editor with a problem-to-submission flow",
			"Admin portal for authoring and managing the problem catalogue",
			"Built around real-system problems rather than interview brain teasers",
		],
		stack: ["TypeScript", "Next.js", "React", "PostgreSQL"],
		links: [
			{
				label: "playgroundish.vercel.app",
				href: "https://playgroundish.vercel.app/",
			},
		],
		caseStudy: [
			{
				heading: "Problem",
				body: [
					"Practice sites optimise for interview performance: self-contained puzzles with a clean spec and one right answer. Very little of that resembles the work.",
					"Playgroundish is built on the opposite premise — problems with vague specs, evolving requirements and legacy constraints, closer to the systems people actually maintain.",
				],
			},
			{
				heading: "Editor & submission flow",
				body: [
					"A problem opens into an interactive editor in the browser. You read the statement, write against it and submit, with submissions recorded per problem so the attempt history is part of the product rather than a throwaway.",
				],
			},
			{
				heading: "Problem management",
				body: [
					"Content is the hard half of a platform like this, so authoring got a real surface: an admin portal for creating and managing problems, keeping the catalogue editable without a deploy.",
				],
			},
			{
				heading: "Shape of the build",
				body: [
					"It is a full-stack product rather than a page — an authenticated app, a persistent data model behind the problems and submissions, and two distinct audiences (solver and author) sharing one system.",
				],
			},
		],
	},
];

/**
 * Older work — kept for breadth. Deliberately terser than the flagships.
 */
export const experiments: Project[] = [
	{
		slug: "voodoo",
		title: "Voodoo",
		category: "AI search & agent platform",
		summary:
			"An AI search and agent platform built on diffusion LLMs, with parallel generation, multi-source search and agentic workflows.",
		highlights: [],
		stack: ["TypeScript", "Next.js", "AI SDK", "Convex"],
		links: [{ label: "usevoodoohq.com", href: "https://usevoodoohq.com" }],
	},
	{
		slug: "lc-company-questions",
		title: "LC Company Questions",
		category: "Interview prep checklist",
		summary:
			"LeetCode problems indexed by the company that asked them, browsable A–Z and tickable as a checklist — progress is kept in the browser between visits.",
		highlights: [],
		stack: ["TypeScript", "Next.js", "Zustand", "Tailwind"],
		links: [
			{
				label: "lc-question-company.vercel.app",
				href: "https://lc-question-company.vercel.app/",
			},
			{
				label: "GitHub",
				href: "https://github.com/ashishk1331/lc-question-company",
			},
		],
	},
	{
		slug: "contest-planner",
		title: "Contest Planner",
		category: "Competitive programming calendar",
		summary:
			"A month view of contests across LeetCode, Codeforces, CodeChef and GeeksforGeeks, with per-day counts, run times and a live countdown to each start.",
		highlights: [],
		stack: ["TypeScript", "React", "Vite", "Tailwind", "date-fns"],
		links: [
			{
				label: "contest-planner.vercel.app",
				href: "https://contest-planner.vercel.app/",
			},
			{
				label: "GitHub",
				href: "https://github.com/ashishk1331/Contest-Planner",
			},
		],
	},
	{
		slug: "wingman",
		title: "Wingman",
		category: "On-device VLMs for Android",
		summary:
			"A mobile app that runs vision-language models locally on-device, backed by llama.cpp and a FastAPI service.",
		highlights: [],
		stack: ["React Native", "FastAPI", "llama.cpp"],
		links: [
			{
				label: "GitHub",
				href: "https://github.com/ashishk1331/smolnlm-android",
			},
		],
	},
	{
		slug: "altar",
		title: "Altar",
		category: "Microblogging app",
		summary:
			"A microblogging app with real-time updates, user profiles and bookmarks, including a designed invite system.",
		highlights: [],
		stack: ["TypeScript", "Next.js", "Convex"],
		links: [
			{ label: "thealtar.vercel.app", href: "https://thealtar.vercel.app/" },
		],
	},
	{
		slug: "commit",
		title: "Commit",
		category: "Daily task tracker",
		summary:
			"A daily task-tracking app built from its own Figma case study — design system, auth and animation included.",
		highlights: [],
		stack: ["React Native", "React Query", "Expo"],
		links: [
			{
				label: "commit-neon.vercel.app",
				href: "https://commit-neon.vercel.app/",
			},
		],
	},
	{
		slug: "folder-routing",
		title: "folder-routing",
		category: "Express routing library",
		summary:
			"A small Express wrapper that maps a directory tree to routes, Next.js style, with async middleware support.",
		highlights: [],
		stack: ["JavaScript", "Express"],
		links: [
			{
				label: "GitHub",
				href: "https://github.com/ashishk1331/folder-routing",
			},
		],
	},
	{
		slug: "tetrapack",
		title: "Tetrapack",
		category: "Notion-style block parser",
		summary:
			"A JavaScript parser that renders Notion-style blocks in isolation, bundled with esbuild and documented in Storybook.",
		highlights: [],
		stack: ["JavaScript", "esbuild", "Storybook"],
		links: [
			{
				label: "tetra-docs.vercel.app",
				href: "https://tetra-docs.vercel.app/",
			},
		],
	},
	{
		slug: "flower-gan",
		title: "Flower GAN",
		category: "Deep learning notebook",
		summary:
			"A DCGAN trained from the 2015 Radford et al. paper to generate 64×64 flower images.",
		highlights: [],
		stack: ["Python", "PyTorch"],
		links: [
			{
				label: "Kaggle",
				href: "https://www.kaggle.com/code/ashishk1331/flower-gan",
			},
		],
	},
];

export function getProject(slug: string): Project | undefined {
	return featuredProjects.find((project) => project.slug === slug);
}
