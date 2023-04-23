import { configureStore } from "@reduxjs/toolkit";
import { reducer as categoriesReducer } from "./category-store/index";
import { reducer as productsReducer } from "./product-store/index";

export function createStore(preloadedState = {}) {
    const store = configureStore({
        reducer: {
            categories: categoriesReducer,
            products: productsReducer,
        },
        preloadedState,
    });

    return store;
}

export const store = createStore();
