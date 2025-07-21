import Achievements from "@/components/Achievements";
import Blogs from "@/components/Blogs";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<>
			<Introduction />
			<Experience />
			<Projects />
			<Skills />
			<Education />
			<Achievements />
			<Blogs />
			<Footer />
		</>
	);
}
