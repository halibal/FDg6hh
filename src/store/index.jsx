import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "./user-store";

export const store = configureStore({
    reducer: {
        auth: userReducer,
    },
});
