import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function About() {
	return (
		<div className="prose prose-neutral w-full h-full max-w-2xl mx-auto">
			<Link
				href="/"
				className="flex items-center gap-2 mb-12 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded cursor-pointer active:scale-90 transition no-underline w-fit font-normal"
			>
				<ArrowLeft size={16} />
				<span>Go Back</span>
			</Link>

			<h1>About me</h1>

			<p>
				Hello! I&apos;m a web designer and developer. I&apos;ve built web-based tooling
				like{" "}
				<a
					href="https://tetra-docs.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					tetra pack
				</a>{" "}
				and{" "}
				<a
					href="https://github.com/ashishk1331/folder-routing"
					target="_blank"
					rel="noopener noreferrer"
				>
					folder-routing
				</a>
				. Recently, I&apos;ve found an unknown attraction towards building web
				services in Go. I wish to onboard the Go and HTMX hype train.
			</p>

			<p>
				I have completed my Bachelor of Technology in Computer Science and
				Engineering from{" "}
				<a href="https://knit.ac.in/" target="_blank" rel="noopener noreferrer">
					Kamla Nehru Institute of Technology, Sultanpur
				</a>
				. I graduated with an aggregate CGPA of <em>8.6</em>. (Medium flex) My
				journey began during my school days when my computer teacher introduced
				me to algorithms and explained how computers can be helpful.
			</p>

			<h2>Machine Learning Engineer</h2>

			<p>
				I implemented a{" "}
				<a
					href="https://www.kaggle.com/code/ashishk1331/flower-gan"
					target="_blank"
					rel="noopener noreferrer"
				>
					DCGAN (Deep Convolutional Generative Adversarial Network)
				</a>{" "}
				following the{" "}
				<a
					href="https://arxiv.org/abs/1511.06434"
					target="_blank"
					rel="noopener noreferrer"
				>
					2015 DCGAN paper by Alec Radford et al.
				</a>
				. The Generator uses convolutional layers with batch normalization and
				ReLU activations, while the Discriminator uses LeakyReLU. I was
				impressed by how effectively the networks learned image patterns through
				adversarial training—essentially a game between two networks trying to
				outsmart each other.
			</p>

			<p>Yes, I love flowers and truly appreciate their beauty.</p>

			<ul className="list-decimal [&_li]:ml-4">
				<span>
					Here are some notebooks where I&apos;ve used convolutional and pooling
					networks to solve classification problems:
				</span>
				<li>
					<a
						href="https://www.kaggle.com/code/ashishk1331/corn-or-maize-leaf-disease-dataset"
						target="_blank"
						rel="noopener noreferrer"
					>
						Corn or Maize Leaf Disease Dataset
					</a>
				</li>
				<li>
					<a
						href="https://www.kaggle.com/code/ashishk1331/clouds-nn"
						target="_blank"
						rel="noopener noreferrer"
					>
						Cirrus Cumulus Stratus Nimbus (CCSN) Database
					</a>
				</li>
				<li>
					<a
						href="https://www.kaggle.com/code/ashishk1331/clean-and-dirty-dishes"
						target="_blank"
						rel="noopener noreferrer"
					>
						Clean and Dirty Dishes
					</a>
				</li>
			</ul>

			<p>
				Why not start by showcasing my exploratory skills with the{" "}
				<a
					href="https://www.kaggle.com/code/ashishk1331/iris-dataset"
					target="_blank"
					rel="noopener noreferrer"
				>
					Iris dataset
				</a>
				? I&apos;ve used Pandas, NumPy, Seaborn, and Scikit-learn to perform EDA,
				visualization, and model training on it. Datasets I&apos;ve worked with for{" "}
				<em>Linear Regression</em> and <em>Classification</em> problems:{" "}
				<a
					href="https://www.kaggle.com/code/ashishk1331/palmer-penguins"
					target="_blank"
					rel="noopener noreferrer"
				>
					Palmer Penguins
				</a>
				,{" "}
				<a
					href="https://www.kaggle.com/code/ashishk1331/iris-dataset"
					target="_blank"
					rel="noopener noreferrer"
				>
					Iris Dataset
				</a>{" "}
				and{" "}
				<a
					href="https://www.kaggle.com/code/ashishk1331/80-cereals"
					target="_blank"
					rel="noopener noreferrer"
				>
					80 Cereals Dataset
				</a>
				. Here, some <em>NLP</em> problem notebooks:{" "}
				<a
					href="https://www.kaggle.com/code/ashishk1331/twitter-sentiment-analysis"
					target="_blank"
					rel="noopener noreferrer"
				>
					Twitter Sentiment Analysis
				</a>
				. Also, the modern art of <em>Neural Network</em> displayed in{" "}
				<a
					href="https://www.kaggle.com/code/ashishk1331/mnist-dataset"
					target="_blank"
					rel="noopener noreferrer"
				>
					MNIST digits dataset
				</a>
				.
			</p>

			<ol className="list-decimal marker:text-primary/75 [&>li]:ml-4 [&>li]:pl-2">
				<p>Data Science Profiles:</p>
				<li>
					<a
						href="https://www.kaggle.com/ashishk1331"
						target="_blank"
						rel="noopener noreferrer"
					>
						ashishk1331 @ Kaggle
					</a>
				</li>
				<li>
					<a
						href="https://profiles.datawars.io/flangdev3000"
						target="_blank"
						rel="noopener noreferrer"
					>
						flangdev3000 @ Datawars
					</a>
				</li>
			</ol>

			<h2>Challenge Architect</h2>

			<p>
				Do you like challenges? So do I. Here are a few for you to try like{" "}
				<a
					href="https://flower-stork-026.notion.site/Crack-The-Nut-Nov-24-edition-12e8d9750c69801a83f6ea583895b86e"
					target="_blank"
					rel="noopener noreferrer"
				>
					crack the nut
				</a>{" "}
				and{" "}
				<a
					href="https://100-days-of-code-ten.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					100 days of code
				</a>
				. Although the 100-day challenge is still a work in progress, you can
				get a taste of what it will offer from the website.
			</p>

			<h2>Pythonista</h2>

			<p>
				I adore python. Only the computer language! I&apos;ve used it to do web
				scraping, building APIs and even for image processing. The{" "}
				<a
					href="https://github.com/ashishk1331/bleach-database"
					target="_blank"
					rel="noopener noreferrer"
				>
					bleach db
				</a>
				,{" "}
				<a
					href="https://github.com/ashishk1331/Image-Algorithms"
					target="_blank"
					rel="noopener noreferrer"
				>
					image algorithms
				</a>{" "}
				and{" "}
				<a
					href="https://github.com/ashishk1331/BrainFuck-Compiler"
					target="_blank"
					rel="noopener noreferrer"
				>
					bf compiler
				</a>{" "}
				are written in python. The simplicity of Python has captivated me for
				years. You can write Python as if you were reading English. Here are few
				lines from the zen of python one could also apply in their daily lives.
			</p>

			<blockquote className="italic">
				If the implementation is hard to explain, it&apos;s a bad idea.
				<br />
				If the implementation is easy to explain, it may be a good idea.
			</blockquote>

			<h2>App Developer</h2>

			<p>
				Yes, I can also build mobile apps using React Native and Expo. I&apos;ve
				built apps like{" "}
				<a
					href="https://feather-website.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					feather
				</a>
				,{" "}
				<a
					href="https://github.com/ashishk1331/altar"
					target="_blank"
					rel="noopener noreferrer"
				>
					altar
				</a>
				, and{" "}
				<a
					href="https://commit-neon.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					commit
				</a>
				. Altar and Commit were great exercises for the mind, as I incorporated
				React Query for efficient queries, a mini design system for uniform
				designs across entire application, proper authentication and even
				animations. Commit is evolving rapidly, and I&apos;m excited to turn it into
				a full-fledged app soon.
			</p>

			<p>
				Web version of feather is also{" "}
				<a
					href="https://feather-roan.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					available here
				</a>
				. However, it has limited set of features and capabilities.
			</p>

			<h2>Design Angle</h2>

			<p>
				I also design my own apps and website. Also, Figma is the fantastic tool
				for designing. Here are few designs I&apos;ve made:
			</p>

			<ol className="mt-4 list-decimal space-y-2 pl-4">
				<li>
					<a
						href="https://www.figma.com/design/alG7S21oTVDPkgxx0FJccE/Commit?node-id=0-1&t=HcJyqvgYusHMSJi4-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						Commit - A daily task management tool (Case Study)
					</a>
				</li>
				<li>
					<a
						href="https://www.figma.com/design/0Csmy0tfF1hbiNkCdPQlb0/Poetizer-Alternative---Altar?node-id=0-1&t=HcJyqvgYusHMSJi4-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						Altar - An Poetizer Alternative
					</a>
				</li>
				<li>
					<a
						href="https://www.figma.com/design/kDUnthgR8RayILLLICxQCI/Portfolio?node-id=0-1&t=HcJyqvgYusHMSJi4-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						Portfolio Design
					</a>
				</li>
			</ol>

			<h2>Asides</h2>

			<p>
				My top 3 albums right now!
				<br />
				I&apos;ve spent the last few months listening to &quot;Hurry Up Tomorrow&quot; by The
				Weeknd, who recently announced that this will be his last album and that
				he&apos;ll be retiring his stage name. Man! The vocals on &quot;HUT&quot; are
				angelic—exemplary! Speaking of exemplary, Kendrick Lamar&apos;s growing
				influence and chance to perform at the Super Bowl halftime show are
				shining examples of his success.
				<br />
				&quot;CHROMAKOPIA&quot; is a great album. I spent all of November listening to
				Tyler. He really put out some great work for us to appreciate. 2024 was
				packed with great albums and projects.
				<br />
				This year, I&apos;ve also spent most of my time listening to Kanye West. He&apos;s
				the GOAT, no doubt. &quot;Flashing Lights&quot; has been on repeat since last
				year. Then, Billie also dropped &quot;Hit Me Hard and Soft,&quot; which was
				exactly the experience I needed to cure my winter blues. Finneas did a
				fantastic job with production.
			</p>
		</div>
	);
}
