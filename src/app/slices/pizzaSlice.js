import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";



export const fetchPizza = createAsyncThunk("pizza/fetchPizza" , async (params) => {
        const {order, sortBy, categoryBy, search , pageCount} = params
        const {data} = await axios.get(`https://630b6a73ed18e8251652fc87.mockapi.io/pizzas?page=${pageCount}&limit=4${categoryBy}&${search}&sortBy=${sortBy}&order=${order}`)
        return data


    }
)


const initialState = {
    items : [],
    status : 'loading'
}

const pizzaSlice = createSlice({
    name : "pizza",
    initialState,
    reducers : {
        setItems(state,action) {
           state.items = action.payload
        }
    },
    extraReducers : {
        [fetchPizza.pending] : (state) => {
            state.status = 'loading'
            state.items = []

        },
        [fetchPizza.fulfilled] : (state,action) => {
            state.items = action.payload
            state.status = 'success'

        },
        [fetchPizza.rejected] : (state) => {
            state.status = 'error'
            state.items = []
        },
    }
})

export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer
