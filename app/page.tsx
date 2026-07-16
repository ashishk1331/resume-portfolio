import Achievements from "@/components/Achievements";
import Blogs from "@/components/Blogs";
import Journey from "@/components/Journey";
import LandingBanner from "@/components/LandingBanner";
import Projects from "@/components/Projects";
import Section from "@/components/Section";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<>
			<LandingBanner />
			<Section
				id="journey"
				eyebrow="The path so far"
				title="my journey"
				subtitle="Every checkpoint — from classrooms to codebases — that got me here."
			>
				<Journey />
			</Section>
			<Projects />
			<Skills />
			<Achievements />
			<Blogs />
		</>
	);
}
