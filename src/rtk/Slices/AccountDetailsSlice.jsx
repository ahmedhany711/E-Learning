import { createSlice } from "@reduxjs/toolkit";

export const AccountDetailsSlice = createSlice({
    name: "AccountDetailsSlice",
    initialState: [],
    reducers: {
        Account_Details: (state, action) =>
        {
            if (state.length === 0) {
                state.push(action.payload);
            }
            else {
                state.pop()
                state.push(action.payload)
            }
        },
        Courses: (state, action) =>
        {

            state.push(action.payload);


        },
        DeleteFromDetails: (state, action) =>
        {
            return state.filter((product) => product.id !== action.payload.id)
        },
        Clear: (state, action) =>
        {
            return []
        },
    },
});

export const { Account_Details, DeleteFromDetails, Clear, Courses } = AccountDetailsSlice.actions;
export default AccountDetailsSlice.reducer;