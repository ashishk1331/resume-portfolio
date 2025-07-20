import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl my-32 p-4 space-y-8">
      <Introduction />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}
