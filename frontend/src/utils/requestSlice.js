import { createSlice } from "@reduxjs/toolkit";

const requestSlice= createSlice({
    name:'request',
    initialState:[],
    reducers:{
        addRequest:(state,action)=>{
            state.push(action.payload)
        },
        removeRequest:(state)=>{
            return []
        }
    }
    })

export default requestSlice.reducer
export const {addRequest,removeRequest} = requestSlice.actions
