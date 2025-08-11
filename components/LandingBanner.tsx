import Image from "next/image";

export default function LandingBanner() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<Image
				src="/landing/banner.webp"
				width={1024}
				height={512}
				className="col-span-full w-full rounded-md"
				alt="Landing page banner. A photo of me."
			/>
		</div>
	);
}
