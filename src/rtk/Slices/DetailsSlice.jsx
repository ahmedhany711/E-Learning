import { createSlice } from "@reduxjs/toolkit";

export const DetailsSlice = createSlice({
    name: "DetailsSlice",
    initialState: [],
    reducers: {
        Details: (state, action) =>
        {
            if (state.length === 0) {
                state.push(action.payload);
            }
            else {
                state.pop()
                state.push(action.payload)
            }
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

export const { Details, DeleteFromDetails, Clear } = DetailsSlice.actions;
export default DetailsSlice.reducer;