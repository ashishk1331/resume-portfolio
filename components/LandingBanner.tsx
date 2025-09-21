import Image from "next/image";

export default function LandingBanner() {
	return (
		<div className="grid grid-cols-6 gap-8 p-2">
			<Image
				src="/landing/avatar.webp"
				width={512}
				height={512}
				className="col-span-1 md:col-start-2 w-full rounded-full"
				alt="A photo of me."
			/>
		</div>
	);
}
