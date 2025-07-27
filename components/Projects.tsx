"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { ProjectsItems } from "@/constants/projects";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Projects() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<>
			<div className="grid grid-cols-6 gap-8 p-2">
				<div className="col-span-full md:col-span-2 md:text-right flex flex-col">
					<h3 className="font-medium text-lg">プロジェクト</h3>
				</div>
				<div className="col-span-full md:col-span-4 flex flex-col items-start gap-1 [&_a]:hover:underline">
					<p>
						さまざまなぶんやにわたり、キカイガクシュウ、フロントエンドカイハツ、リアルタイムキノウをそなえたウェブ・モバイルアプリのプロジェクトをはばひろくてがけてきました。
					</p>
				</div>
				<div className="col-span-full md:col-span-2 md:text-right">
					<a href="#projects">
						<h3 className="font-medium text-lg">Projects</h3>
					</a>
				</div>
				<div className="col-span-full md:col-span-4 flex flex-col items-start gap-12 text-sm">
					{ProjectsItems.map((project, i) => (
						<div key={i} className="flex flex-col items-start gap-2">
							{project.images && (
								<div className="flex flex-wrap items-center gap-2">
									{project.images.map((src) => (
										<div
											key={src}
											className="size-24 aspect-square overflow-hidden rounded-md flex items-center justify-around"
										>
											<motion.img
												src={src}
												layoutId={src}
												alt="tetrapack-banner"
												className="h-full w-full object-cover cursor-pointer"
												onClick={() => setSelectedImage(src)}
											/>
										</div>
									))}
								</div>
							)}
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
			<AnimatePresence>
				{selectedImage && (
					<>
						<motion.div
							className="fixed inset-0 w-full h-full bg-black/80 z-50 flex items-center justify-center"
							onClick={() => setSelectedImage(null)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<motion.img
								src={selectedImage}
								alt={`Full Image of ${selectedImage}`}
								layoutId={selectedImage}
								className="max-w-[90vw] max-h-[90vh] rounded-md"
							/>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
