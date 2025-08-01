import Footer from "@/components/Footer";
import MegaBlogs from "@/components/MegaBlogs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { House } from "lucide-react";

export default function BlogsPage() {
	return (
		<>
			<Breadcrumbs
				items={[
					{
						id: "home",
						label: (
							<>
								<House size={16} className="inline-block align-middle" />
								<span>Home</span>
							</>
						),
						href: "/",
					},
					{
						id: "blogs",
						label: <span>Blogs</span>,
						href: "/blog",
					},
				]}
			/>
			<MegaBlogs />
			<Footer />
		</>
	);
}
