import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
const bookSlice = createSlice({
    name: 'book',
    initialState: [],
    reducers: {
        addBooks: (state, action) => {
            // If payload is an array, replace the state with it
            // If it's a single item, add it to the state
            return Array.isArray(action.payload) 
                ? [...action.payload] 
                : [...state, action.payload];
        },
        removeBooks: (state) => {
            return [];
        }
=======
const bookSlice= createSlice({
    name : 'book',
    initialState:[],
    reducers:{
        addBooks:(state,action)=> {
            state.push(action.payload);
        },
        removeBooks:(state,action)=> {
        state= [];
>>>>>>> e04be9ec0a8ffe43c70f041fc0f76ad8b264bc5e
    }
})

export default bookSlice.reducer
export const {addBooks,removeBooks} = bookSlice.actions

