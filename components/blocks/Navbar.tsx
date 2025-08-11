import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex justify-around">
			<ul className="w-fit h-fit flex items-center gap-4 [&_a]:p-2 *:hover:scale-110 *:transition-transform *:duration-150 *:underline *:underline-offset-2 *:decoration-neutral-300 p-4 pb-6 px-8 rounded-b-md shadow bg-white">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/blog">Blogs</Link>
				</li>
			</ul>
		</nav>
	);
}
