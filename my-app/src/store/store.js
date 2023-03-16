import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productReducer from "./productSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartSlice
    }
})
