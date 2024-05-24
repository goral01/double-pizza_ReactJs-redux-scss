import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from "./slices/itemsSlice";
import LoadingSlice from "./slices/loadingSlice";
import ModalWindowSlice from "./slices/modalWindowSlice";

export const store = configureStore({
    reducer: {
        ItemsSlice,
        LoadingSlice,
        ModalWindowSlice,
    },
});
