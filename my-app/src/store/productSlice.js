import { createSlice } from "@reduxjs/toolkit";

export const Statuses = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: Statuses.IDLE
    },
    reducers: {
        setProduct(state, action){
            state.data = action.payload
        }
    }
})


export const {setProduct} = productSlice.actions

export default productSlice.reducer