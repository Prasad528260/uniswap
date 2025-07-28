import { createSlice } from "@reduxjs/toolkit";

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
    }
})

export default bookSlice.reducer
export const {addBooks,removeBooks} = bookSlice.actions

