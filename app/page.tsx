import Achievements from "@/components/Achievements";
import Blogs from "@/components/Blogs";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import LandingBanner from "@/components/LandingBanner";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<>
			<LandingBanner />
			<Introduction />
			<Experience />
			<Projects />
			<Skills />
			<Education />
			<Achievements />
			<Blogs />
		</>
	);
}
