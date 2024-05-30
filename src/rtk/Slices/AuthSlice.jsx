// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null, // Store user information including ID
    // other authentication related states
};

const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        setUser: (state, action) =>
        {
            state.user = action.payload;
        },
        // other authentication related reducers
    },
});
export const selectLoggedInUserId = (state) => state.auth.user?.id;

export const { setUser } = AuthSlice.actions;
export default AuthSlice.reducer;

