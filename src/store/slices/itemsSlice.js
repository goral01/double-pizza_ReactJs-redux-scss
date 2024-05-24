import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataItems: [],
    cartItems: [],
};

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        setDataItems: (state, action) => {
            state.dataItems = action.payload;
        },
        addCartItems: (state, action) => {
            const existingCartItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (existingCartItem) {
                existingCartItem.count = (existingCartItem.count || 0) + 1;
            } else {
                state.cartItems.push({ ...action.payload, count: 1 });
            }
        },
        removeCartItems: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },
        increaseCartItem: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if (item) {
                item.count = (item.count || 0) + 1;
            }
        },
        decreaseCartItem: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if (item) {
                if (item.count && item.count > 1) {
                    item.count -= 1;
                } else {
                    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
                }
            }
        },
        clearCartItems: (state) => {
            state.cartItems = [];
        },
    },
});

export const {
    setDataItems,
    addCartItems,
    removeCartItems,
    clearCartItems,
    increaseCartItem,
    decreaseCartItem,
} = itemsSlice.actions;

export default itemsSlice.reducer;
