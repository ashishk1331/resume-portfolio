import { ExternalLink } from "lucide-react";

export default function Introduction() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right flex flex-col">
				<a href="#introduction">
					<h3 className="font-medium text-lg">Ashish Khare</h3>
				</a>
			</div>
			<div className="col-span-full md:col-span-4 flex flex-col items-start gap-1 text-sm [&_a]:hover:underline">
				<p>Full-Stack / Machine Learning / Design Engineer</p>
				<a href="mailto:ashish.khare3110+portfolio@gmail.com">
					ashish.khare3110@gmail.com
				</a>
				<a href="https://www.linkedin.com/in/ashishk1331/">
					linkedin.com/in/ashishk1331
				</a>
				<a href="https://github.com/ashishk1331">github.com/ashishk1331</a>
				<a href="https://www.kaggle.com/ashishk1331">kaggle.com/ashishk1331</a>
				<a
					href="/about"
					className="inline text-left underline decoration-neutral-400"
				>
					<span className="inline">Read more</span>
					<ExternalLink
						size={12}
						className="inline-block align-middle text-neutral-400 ml-1"
					/>
				</a>
			</div>
		</div>
	);
}
