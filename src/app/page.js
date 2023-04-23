import { Category, Slider } from "@/components";
import { settings } from "@/constants";

export const getCategories = async () => {
	const resp = await fetch(`${settings.baseUrl}/categories`);
	return resp.json();
};

export default async function HomePage() {
	const data = await getCategories();
	const slicedCategories = data.category.slice(0, 3);

	return <main className="max-w-[1340px] mx-auto my-[40px] flex flex-col gap-[40px]">
		<Slider />
		{
			slicedCategories.map((category) => <Category key={category.id} {...category} />)
		}
	</main>;
}
