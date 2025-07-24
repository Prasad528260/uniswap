import { createSlice } from "@reduxjs/toolkit";

const notesSlice= createSlice({
    name : 'notes',
    initialState:null,
    reducers:{
        addNotes:(state,action)=> action.payload,
        removeNotes:()=> null
    }

})

export default notesSlice.reducer
export const {addNotes,removeNotes} = notesSlice.actions
