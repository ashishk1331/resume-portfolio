import Footer from "@/components/Footer";
import MegaBlogs from "@/components/MegaBlogs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function BlogsPage() {
	return (
		<>
			<Breadcrumbs
				items={[
					{
						id: "home",
						label: <span>Home</span>,
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
