import { createSlice } from "@reduxjs/toolkit";

const bookSlice= createSlice({
    name : 'book',
    initialState:null,
    reducers:{
        addBooks:(state,action)=> action.payload,
        removeBooks:()=> null
    }

})

export default bookSlice.reducer
export const {addBooks,removeBooks} = bookSlice.actions

