import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalWindowStatus: false,
};

export const modalWindowSlice = createSlice({
    name: "modalWindow",
    initialState,
    reducers: {
        setModalWindowStatus: (state, action) => {
            state.modalWindowStatus = !action.payload;
        },
    },
});

export const { setModalWindowStatus } = modalWindowSlice.actions;

export default modalWindowSlice.reducer;
