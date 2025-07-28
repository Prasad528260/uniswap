import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'notes',
    initialState: [],
    reducers: {
        addNotes: (state, action) => {
            // If payload is an array, replace the state with it
            // If it's a single item, add it to the state
            return Array.isArray(action.payload) 
                ? [...action.payload] 
                : [...state, action.payload];
        },
        removeNotes: (state) => {
            return [];
        }
    }
})

export default notesSlice.reducer
export const {addNotes,removeNotes} = notesSlice.actions
