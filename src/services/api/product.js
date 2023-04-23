import { settings } from "@/constants";

export const getProductsByCategoryId = async (categoryId) => {
    const resp = await fetch(`${settings.baseUrl}/products/${categoryId}`);
    return resp.json();
};

export const getProductCoverImage = async (fileName) => {
    const resp = await fetch(`${settings.baseUrl}/cover_image`, {
        method: "POST",
        body: JSON.stringify({
            fileName: fileName,
        }),
    });
    return resp.json();
};

export const getProductById = async (productId) => {
    const resp = await fetch(`${settings.baseUrl}/product/${productId}`);
    return resp.json();
};