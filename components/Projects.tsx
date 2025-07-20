export default function Projects() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right">
				<h3 className="font-medium text-lg">Projects</h3>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-8 text-sm">
				
				{[
					{
						title: "Altar",
						date: "Jul 2025",
						desc: "Created a microblogging app with real-time features, user profiles, and bookmarks using Supabase.",
						stack: "TypeScript, NextJS, Convex",
						icon: "/logo/altar_logo.svg",
						href: "https://thealtar.vercel.app/"
					},
					{
						title: "Flower GAN",
						date: "May 2025",
						desc: "Trained a DCGAN to generate realistic 64×64 flower images, improving FID from 92 to 43.",
						stack: "Python, PyTorch",
						icon: "/logo/flower_gan_logo.svg",
						href: "https://www.kaggle.com/code/ashishk1331/flower-gan"
					},
					{
						title: "VLMs for Android",
						date: "Mar 2025",
						desc: "Made a mobile app to run vision-language models locally with Llama.cpp and FastAPI.",
						stack: "React Native, FastAPI, Llama.cpp",
						icon: "/logo/wingman_logo.svg",
						href: "https://github.com/ashishk1331/smolnlm-android"
					},
					{
						title: "80 Cereals Dataset",
						date: "Jan 2025",
						desc: "Performed EDA and trained regressors on cereal data achieving R² ≈ 0.99.",
						stack: "Python, Sklearn, Seaborn",
						icon: "/logo/80_cereal_logo.svg",
						href: "https://www.kaggle.com/code/ashishk1331/80-cereals"
					},
					{
						title: "folder-routing",
						date: "Dec 2023",
						desc: "Built a lightweight ExpressJS wrapper with Next.js-style routing and async middleware.",
						stack: "JavaScript, ExpressJS",
						icon: "/logo/folder_routing_logo.svg",
						href: "https://github.com/ashishk1331/folder-routing"
					},
					{
						title: "Tetrapack",
						date: "Jun 2023",
						desc: "Developed a Notion-style JavaScript parser with isolated block rendering and fast bundling.",
						stack: "JavaScript, ESBuild, Storybook",
						icon: "/logo/tetrapack_logo.svg",
						href: "https://tetra-docs.vercel.app/"
					},
				].map((project, i) => (
					<div key={i} className="flex flex-col items-start gap-2">
						<a href={project.href} className="flex items-center gap-2 hover:underline">
							<img src={project.icon} className="size-5 aspect-square rounded" />
							<h3 className="font-medium text-lg">{project.title}</h3>
							<h3 className="text-lg text-neutral-400">{project.date}</h3>
						</a>
						<p>{project.desc}</p>
						<div className="flex items-center gap-1 text-neutral-400">
							<p>{project.stack}</p>
						</div>
					</div>
				))}

			</div>
		</div>
	);
}
