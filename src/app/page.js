import { Category, Slider } from "@/components";
import { store } from "@/store";
import { fetchCategories } from "@/store/category-store";
import { StoreProvider } from "@/store/store-provider";
import CustomLayout from "./customLayout";

export default async function HomePage() {
	await store.dispatch(fetchCategories());
	const categories = store.getState().categories.categories;
	const slicedCategories = categories.slice(0, 3);

	return (
		<CustomLayout>
			<main className="max-w-[1340px] mx-auto my-[40px] flex flex-col gap-[40px]">
				<StoreProvider preloadedState={{
					categories: {
						categories
					}
				}}>
					<Slider />
					{
						slicedCategories.map((category) => <Category key={category.id} {...category} />)
					}
				</StoreProvider>
			</main>;
		</CustomLayout>
	);
}
