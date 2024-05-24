import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loadingStatus: true,
};

export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoadingStatus: (state, action) => {
            state.loadingStatus = !action.payload;
        },
    },
});

export const { setLoadingStatus } = loadingSlice.actions;

export default loadingSlice.reducer;

