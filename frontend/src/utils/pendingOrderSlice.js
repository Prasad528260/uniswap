import { createSlice } from "@reduxjs/toolkit";

const pendingOrderSlice = createSlice({
    name : 'pendingOrder',
    initialState:[],
    reducers:{
        addPendingOrder:(state,action)=> {
            state.push(action.payload)
        },
        removePendingOrder:(state,action)=> {
            state = state.filter((item)=> item.id !== action.payload.id)
        }
    }
})

export default pendingOrderSlice.reducer
export const {addPendingOrder,removePendingOrder} = pendingOrderSlice.actions
