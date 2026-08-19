import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Article from "@/components/blocks/Article";

export const metadata: Metadata = {
	title: "About",
	description:
		"Ashish Khare — Software Engineer. Background, the things I build outside work, and what I am currently trying to understand.",
	alternates: { canonical: "/about" },
};

export default function About() {
	return (
		<div className="mx-auto max-w-2xl">
			<Link
				href="/"
				className="-my-1 inline-flex items-center gap-1.5 py-1 text-[0.9rem] italic text-muted transition-colors hover:text-ink"
			>
				<ArrowLeft size={14} aria-hidden="true" />
				Home
			</Link>

			<Article className="mt-8">
				<h1>About</h1>

				<p>
					I&apos;m a software engineer. I work at{" "}
					<a
						href="https://www.linkedin.com/company/quinn-live/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Quinn
					</a>
					, where most of my time goes to pipelines that have to produce
					consistent output from models that would rather not — OCR extraction,
					quality control loops, and the scheduling and queueing around them.
					Before that I interned at Stoira and Frontend Hire, mostly on React
					Native products.
				</p>

				<p>
					I did my B.Tech in Computer Science at{" "}
					<a
						href="https://knit.ac.in/"
						target="_blank"
						rel="noopener noreferrer"
					>
						KNIT Sultanpur
					</a>
					, graduating in 2025 with a CGPA of 8.6. The interest started earlier
					than that, with a school computer teacher who explained algorithms as
					something you use rather than something you memorise.
				</p>

				<h2>What I build</h2>

				<p>
					Lately, backend and infrastructure. {""}
					<Link href="/projects/seline">Seline</Link> is a Go platform that runs
					a personal AI agent in a container per user, which turns out to be
					mostly a lifecycle and scheduling problem rather than a model one.{" "}
					<Link href="/projects/radius">Radius</Link> is a Python MCP server
					that makes a personal bookmark corpus queryable — FTS5 and fuzzy
					search over libSQL, behind signed tokens with per-tool scopes.{" "}
					<Link href="/projects/playgroundish">Playgroundish</Link> is a
					full-stack practice platform built around problems that look like real
					systems instead of interview puzzles.
				</p>

				<p>
					Earlier work leaned more toward tooling and the web:{" "}
					<a
						href="https://tetra-docs.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Tetrapack
					</a>
					, a parser that renders Notion-style blocks in isolation, and{" "}
					<a
						href="https://github.com/ashishk1331/folder-routing"
						target="_blank"
						rel="noopener noreferrer"
					>
						folder-routing
					</a>
					, an Express wrapper that maps a directory tree to routes. Both came
					out of wanting a thing that did not exist yet in the shape I wanted
					it.
				</p>

				<h2>Models, from scratch</h2>

				<p>
					I learn architectures by implementing them rather than reading about
					them. That started with a{" "}
					<a
						href="https://www.kaggle.com/code/ashishk1331/flower-gan"
						target="_blank"
						rel="noopener noreferrer"
					>
						DCGAN
					</a>{" "}
					built from the{" "}
					<a
						href="https://arxiv.org/abs/1511.06434"
						target="_blank"
						rel="noopener noreferrer"
					>
						2015 Radford et al. paper
					</a>
					, and has since moved through hierarchical reasoning models, masked
					diffusion and flow matching — training runs small enough to fit in
					Colab and instructive enough to be worth the GPU hours.
				</p>

				<p>
					The classical work lives on Kaggle too: EDA and regression on{" "}
					<a
						href="https://www.kaggle.com/code/ashishk1331/80-cereals"
						target="_blank"
						rel="noopener noreferrer"
					>
						80 Cereals
					</a>{" "}
					and{" "}
					<a
						href="https://www.kaggle.com/code/ashishk1331/palmer-penguins"
						target="_blank"
						rel="noopener noreferrer"
					>
						Palmer Penguins
					</a>
					, convolutional classifiers for{" "}
					<a
						href="https://www.kaggle.com/code/ashishk1331/corn-or-maize-leaf-disease-dataset"
						target="_blank"
						rel="noopener noreferrer"
					>
						leaf disease
					</a>{" "}
					and{" "}
					<a
						href="https://www.kaggle.com/code/ashishk1331/clouds-nn"
						target="_blank"
						rel="noopener noreferrer"
					>
						cloud types
					</a>
					, and{" "}
					<a
						href="https://www.kaggle.com/code/ashishk1331/twitter-sentiment-analysis"
						target="_blank"
						rel="noopener noreferrer"
					>
						sentiment analysis
					</a>{" "}
					for the NLP side. My full profile is{" "}
					<a
						href="https://www.kaggle.com/ashishk1331"
						target="_blank"
						rel="noopener noreferrer"
					>
						@ashishk1331
					</a>
					.
				</p>

				<h2>Python, and things I wrote in it</h2>

				<p>
					Python is where I go when the problem is data-shaped. A{" "}
					<a
						href="https://github.com/ashishk1331/bleach-database"
						target="_blank"
						rel="noopener noreferrer"
					>
						scraped database about Bleach
					</a>
					, a set of{" "}
					<a
						href="https://github.com/ashishk1331/Image-Algorithms"
						target="_blank"
						rel="noopener noreferrer"
					>
						image algorithms
					</a>{" "}
					implemented by hand, and a{" "}
					<a
						href="https://github.com/ashishk1331/BrainFuck-Compiler"
						target="_blank"
						rel="noopener noreferrer"
					>
						Brainfuck compiler
					</a>{" "}
					are all in there. One line from the Zen of Python has held up better
					than most engineering advice I have read since:
				</p>

				<blockquote>
					If the implementation is hard to explain, it&apos;s a bad idea.
					<br />
					If the implementation is easy to explain, it may be a good idea.
				</blockquote>

				<h2>Mobile and design</h2>

				<p>
					React Native and Expo were my first professional stack, and I still
					reach for them:{" "}
					<a
						href="https://github.com/ashishk1331/altar"
						target="_blank"
						rel="noopener noreferrer"
					>
						Altar
					</a>{" "}
					and{" "}
					<a
						href="https://commit-neon.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Commit
					</a>{" "}
					both shipped with a real data layer, a small design system and proper
					auth rather than screens glued together.
				</p>

				<p>
					I design my own products before building them, which mostly saves me
					from building the wrong one. The case studies are public:{" "}
					<a
						href="https://www.figma.com/design/alG7S21oTVDPkgxx0FJccE/Commit?node-id=0-1&t=HcJyqvgYusHMSJi4-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						Commit
					</a>{" "}
					and{" "}
					<a
						href="https://www.figma.com/design/0Csmy0tfF1hbiNkCdPQlb0/Poetizer-Alternative---Altar?node-id=0-1&t=HcJyqvgYusHMSJi4-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						Altar
					</a>
					.
				</p>

				<h2>Elsewhere</h2>

				<p>
					I write regularly — see <Link href="/#writing">the notebook</Link> —
					and moderate JavaScript and React tags on{" "}
					<a
						href="https://dev.to/ashishk1331"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dev.to
					</a>
					. I ran the Android track at{" "}
					<a
						href="https://gdg.community.dev/gdg-on-campus-kamla-nehru-institute-of-technology-sultanpur-india/"
						target="_blank"
						rel="noopener noreferrer"
					>
						GDG on Campus KNIT
					</a>
					, and I have put together a couple of puzzle sets for people who like
					that sort of thing —{" "}
					<a
						href="https://flower-stork-026.notion.site/Crack-The-Nut-Nov-24-edition-12e8d9750c69801a83f6ea583895b86e"
						target="_blank"
						rel="noopener noreferrer"
					>
						Crack the Nut
					</a>{" "}
					and{" "}
					<a
						href="https://100-days-of-code-ten.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						100 Days of Code
					</a>
					.
				</p>

				<p>
					Away from the keyboard it is mostly albums on repeat — Kanye,
					Kendrick, Tyler, and a long stretch of Billie&apos;s{" "}
					<em>Hit Me Hard and Soft</em>, which Finneas produced well enough that
					I wrote{" "}
					<Link href="/blog/blood-harmony-by-finneas">
						a whole post about his own record
					</Link>
					. I also like graphs, type systems, and arguing about video games.
				</p>
			</Article>
		</div>
	);
}
