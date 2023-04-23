import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsByCategory = createAsyncThunk(
    "products/fetchProductsByCategory",
    async (categoryId, { getState }) => {
        const { products } = getState();
        if (
            Object.keys(products.byCategoryId).length > 0 &&
            products.byCategoryId.hasOwnProperty(categoryId)
        ) {
            return;
        }

        const response = await fetch(
            `https://assign-api.piton.com.tr/api/rest/products/${categoryId}`
        );
        const data = await response.json();
        return { categoryId, products: data.product };
    }
);

export const { reducer, actions } = createSlice({
    name: "products",
    initialState: {
        byCategoryId: {},
        fetchedCategoryIds: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                if (!action.payload) {
                    state.status = "succeeded";
                    return;
                }

                state.status = "succeeded";
                state.byCategoryId[action.payload.categoryId] =
                    action.payload.products;
                state.fetchedCategoryIds.push(action.payload.categoryId);
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});
