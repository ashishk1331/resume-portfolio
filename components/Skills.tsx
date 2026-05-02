export default function Skills() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<div className="col-span-full md:col-span-2 md:text-right">
				<a href="#skills">
					<h3 className="font-medium text-lg">Skills</h3>
				</a>
			</div>
			<div className="col-span-full md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-1 text-sm">
				<div className="flex flex-col items-start">
					<h3 className="font-medium text-lg mb-2">Languages</h3>
					<p>TypeScript</p>
					<p>Python</p>
					<p>Go</p>
					<p>SQL</p>
				</div>

				<div className="flex flex-col items-start">
					<h3 className="font-medium text-lg mb-2">Backend &amp; Systems</h3>
					<p>Node.js</p>
					<p>FastAPI</p>
					<p>Gin</p>
					<p>Docker</p>
					<p>REST APIs</p>
				</div>

				<div className="flex flex-col items-start">
					<h3 className="font-medium text-lg mb-2">Frontend &amp; Mobile</h3>
					<p>NextJS</p>
					<p>React Native, Expo</p>
					<p>React Query</p>
					<p>Zustand</p>
					<p>Reanimated</p>
				</div>

				<div className="flex flex-col items-start">
					<h3 className="font-medium text-lg mb-2">Databases &amp; Platforms</h3>
					<p>PostgreSQL</p>
					<p>MongoDB</p>
					<p>GCP</p>
					<p>Supabase</p>
					<p>Git, Postman, Figma</p>
				</div>
			</div>
		</div>
	);
}
