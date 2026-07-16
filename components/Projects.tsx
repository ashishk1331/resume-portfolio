"use client";

import { ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { ProjectsItems } from "@/constants/projects";
import Section from "./Section";

export default function Projects() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<>
			<Section
				id="projects"
				eyebrow="Built with love"
				title="things i've shipped"
				subtitle="A mixed bag of products, experiments and dev tools — pick one and poke around."
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{ProjectsItems.map((project) => (
						<div
							key={project.title}
							className="pop-card flex flex-col rounded-2xl border-2 border-border bg-paper-white p-5"
						>
							{project.images && project.images.length > 0 && (
								<div className="flex flex-wrap items-center gap-2 mb-4">
									{project.images.slice(0, 4).map((src) => (
										<div
											key={src}
											className="size-16 aspect-square overflow-hidden rounded-xl flex items-center justify-around"
										>
											<motion.img
												src={src}
												layoutId={src}
												alt={project.title}
												className="h-full w-full object-cover cursor-pointer"
												onClick={() => setSelectedImage(src)}
											/>
										</div>
									))}
								</div>
							)}
							<a
								href={project.href}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2"
							>
								<span className="grid place-items-center rounded shrink-0 overflow-hidden">
									<Image
										alt={project.title}
										src={project.icon}
										width={128}
										height={128}
										className="size-6"
									/>
								</span>
								<h3 className="min-w-0 text-subheading font-bold text-charcoal group-hover:text-spark-blue transition-colors">
									{project.title}
								</h3>
								<ExternalLink size={14} className="text-spark-blue shrink-0" />
								<span className="ml-auto rounded-xl bg-storybook-green px-2.5 py-0.5 text-caption font-bold uppercase tracking-[0.053em] text-eager-green shrink-0">
									{project.date}
								</span>
							</a>
							<p className="mt-3 text-pencil-gray flex-1">{project.desc}</p>
							<p className="mt-4 text-caption font-bold uppercase tracking-[0.053em] text-spark-blue">
								{project.stack}
							</p>
						</div>
					))}
				</div>
			</Section>

			<AnimatePresence>
				{selectedImage && (
					<motion.div
						className="fixed inset-0 w-full h-full bg-night-ink/80 z-50 flex items-center justify-center p-6"
						onClick={() => setSelectedImage(null)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.img
							src={selectedImage}
							alt={`Preview of ${selectedImage}`}
							layoutId={selectedImage}
							className="max-w-[90vw] max-h-[90vh] rounded-2xl"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
