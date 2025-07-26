import { ProjectsItems } from "@/constants/projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right flex flex-col">
				<h3 className="font-medium text-lg">プロジェクト</h3>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-1 [&_a]:hover:underline">
				<p>さまざまなぶんやにわたり、キカイガクシュウ、フロントエンドカイハツ、リアルタイムキノウをそなえたウェブ・モバイルアプリのプロジェクトをはばひろくてがけてきました。</p>
			</div>
			<div className="col-span-full md:col-span-2 md:text-right">
				<h3 className="font-medium text-lg">Projects</h3>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-8 text-sm">
				{ProjectsItems.map((project, i) => (
					<div key={i} className="flex flex-col items-start gap-2">
						<a
							href={project.href}
							className="flex items-center gap-2 hover:underline"
						>
							<Image
								alt={project.title}
								src={project.icon}
								width={128}
								height={128}
								className="size-5 aspect-square rounded"
							/>
							<h3 className="font-medium text-lg">{project.title}</h3>
							<h3 className="text-lg text-neutral-400">{project.date}</h3>
							<ExternalLink size={12} className="text-neutral-400 mt-0.5" />
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
