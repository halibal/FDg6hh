"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
};

export const { actions, reducer } = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFail: (state, action) => {
            state.isAuthenticated = false;
            state.user = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.user = null;
        },
    },
});
