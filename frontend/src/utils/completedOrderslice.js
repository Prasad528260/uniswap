import { createSlice } from "@reduxjs/toolkit";

const completedOrderSlice= createSlice({
    name:'completedOrder',
    initialState:[],
    reducers:{
        addCompletedOrder:(state,action)=>{
            state.push(action.payload)
        },
        removeCompletedOrder:(state)=>{
            return []
        }
    }
})

export default completedOrderSlice.reducer
export const {addCompletedOrder,removeCompletedOrder} = completedOrderSlice.actions
