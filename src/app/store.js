import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice"
import pizza from './slices/pizzaSlice'
import {configureStore} from "@reduxjs/toolkit";



export const store = configureStore({
    reducer : {
        filter,
        cart,
        pizza

    }
})



