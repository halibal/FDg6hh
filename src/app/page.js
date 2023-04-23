import { Category, Slider } from "@/components";

export default function HomePage() {
	return <main className="max-w-[1340px] mx-auto my-[40px] flex flex-col gap-[40px]">
		<Slider />
		{/* map over category coming from redux */}
		<Category />
		<Category />
		<Category />
		<Category />
	</main>;
}
