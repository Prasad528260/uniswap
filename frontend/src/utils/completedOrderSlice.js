import { createSlice } from "@reduxjs/toolkit";

const completedOrderSlice = createSlice({
    name : 'completedOrder',
    initialState:[],
    reducers:{
        addCompletedOrder:(state,action)=> {
            state.push(action.payload)
        },
        removeCompletedOrder:(state,action)=> {
            state = state.filter((item)=> item.id !== action.payload.id)
        }
    }
})

export default completedOrderSlice.reducer
export const {addCompletedOrder,removeCompletedOrder} = completedOrderSlice.actions