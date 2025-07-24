import { createSlice } from "@reduxjs/toolkit";

const bookSlice= createSlice({
    name : 'book',
    initialState:[],
    reducers:{
        addBooks:(state,action)=> {
            state.push(action.payload);
        },
        removeBooks:(state,action)=> {
        state= [];
    }
})

export default bookSlice.reducer
export const {addBooks,removeBooks} = bookSlice.actions

