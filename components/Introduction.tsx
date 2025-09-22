import { SocialIcon } from "react-social-icons";
import { socials } from "@/constants/socials";

export default function Introduction() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right flex flex-col">
				<a href="#introduction">
					<h3 className="font-medium text-lg">Ashish Khare</h3>
				</a>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-1 text-sm [&_a]:hover:underline">
				<p>Software Engineer</p>
				<p>
					I enjoy building all sorts of things—websites, apps, dev tools,
					libraries, servers, models, songs, even circuits. I also love chatting
					about data structures (especially graphs), systems, design, video
					games, languages (both human and computer), and a bit of philosophy
					too.
				</p>
				<em>Ping me on twitter!</em>
				<div className="flex flex-wrap items-center gap-2 mt-2">
					<SocialIcon
						href="mailto:ashish.khare3110+portfolio@gmail.com"
						network="mailto"
						className="size-8!"
					/>
					{socials.map(({ href, network }) => (
						<SocialIcon
							key={href}
							href={href}
							network={network}
							className="size-8!"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
