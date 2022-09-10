import {createSlice} from "@reduxjs/toolkit";
import {getCartForm} from "../../utils/getCartForm";




const initialState = {
    totalPrice : getCartForm().totalPrice,
    items : getCartForm().items
}







const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addItem(state,action) {
            const item =  state.items.find(obj => obj.id === action.payload.id && obj.sizes === action.payload.sizes)
            if (item) {
                 item.count++
            }
            else {
                action.payload.count = 1
                state.items.push(action.payload)

            }
            state.totalPrice = state.items.reduce((total, obj) => (obj.price * obj.count) + total , 0)
        },

        increment(state,action) {
            const item = state.items.find(obj => obj.title === action.payload)
            item.count++
            state.totalPrice = state.items.reduce((total, obj) => (obj.price * obj.count) + total , 0)
        },

        decrement(state,action) {
            const item = state.items.find(obj => obj.title === action.payload)
            item.count--
            state.totalPrice = state.items.reduce((total, obj) => (obj.price * obj.count) + total , 0)
        },


        removeItem(state,action){
            console.log(action)
            state.items = state.items.filter((obj) => obj.title !== action.payload)
            state.totalPrice = state.items.reduce((total, obj) => (obj.price * obj.count) + total , 0)

        },

        clearItems(state) {
            state.items = []
            state.totalPrice = state.items.reduce((total, obj) => (obj.price * obj.count) + total , 0)
        },

    },

})





export const {addItem, removeItem , clearItems , increment , decrement } = cartSlice.actions
export default cartSlice.reducer