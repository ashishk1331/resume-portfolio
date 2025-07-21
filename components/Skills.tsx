export default function Skills() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right">
				<h3 className="font-medium text-lg">Skills</h3>
			</div>
			<div className="col-span-full md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-1 text-sm">
				<div className="flex flex-col items-start">
					<h3 className="font-medium text-lg mb-2">Languages</h3>
					<p>Typescript</p>
					<p>Python</p>
					<p>SQL</p>
					<p>GoLang</p>
				</div>

				<div className="flex flex-col items-start">
					<h3 className="font-medium text-lg mb-2">Technologies</h3>
					<p>NextJS</p>
					<p>React Native, Expo</p>
					<p>NodeJS</p>
					<p>Git/Github</p>
				</div>

				<div className="flex flex-col items-start">
					<h3 className="font-medium text-lg mb-2">Tools</h3>
					<p>Figma</p>
					<p>Sublime Text</p>
					<p>Postman</p>
					<p>Kaggle</p>
				</div>
			</div>
		</div>
	);
}
