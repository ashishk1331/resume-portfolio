import Section from "@/components/ui/Section";
import { featuredProjects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

const [lead, ...rest] = featuredProjects;

export default function FeaturedWork() {
	return (
		<Section id="work" label="Selected Work">
			<div className="space-y-16 md:space-y-20">
				<ProjectCard project={lead} index={1} featured />
				<div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
					{rest.map((project, i) => (
						<ProjectCard key={project.slug} project={project} index={i + 2} />
					))}
				</div>
			</div>
		</Section>
	);
}
