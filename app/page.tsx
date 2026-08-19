import Experience from "@/components/home/Experience";
import Experiments from "@/components/home/Experiments";
import FeaturedWork from "@/components/home/FeaturedWork";
import Hero from "@/components/home/Hero";
import Masthead from "@/components/home/Masthead";
import Skills from "@/components/home/Skills";
import Writing from "@/components/home/Writing";

export default function Home() {
	return (
		<>
			<Hero />
			<Masthead />
			<div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
				<FeaturedWork />
				<Experience />
				<Skills />
				<Writing />
				<Experiments />
			</div>
		</>
	);
}
