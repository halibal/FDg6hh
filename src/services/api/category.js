import { settings } from "@/constants";

export const getCategories = async () => {
    const resp = await fetch(`${settings.baseUrl}/categories`);
    return resp.json();
};