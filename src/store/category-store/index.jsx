import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        const response = await fetch(
            "https://assign-api.piton.com.tr/api/rest/categories"
        );
        const data = await response.json();
        return data.category;
    }
);

export const { reducer, actions } = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});
