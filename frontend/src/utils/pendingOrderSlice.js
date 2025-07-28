import { createSlice } from "@reduxjs/toolkit";

const pendingOrderSlice= createSlice({
    name:'pendingOrder',
    initialState:[],
    reducers:{
        addPendingOrder:(state,action)=>{
            state.push(action.payload)
        },
        removePendingOrder:(state)=>{
            return []
        }
    }
    })

export default pendingOrderSlice.reducer
export const {addPendingOrder,removePendingOrder} = pendingOrderSlice.actions
