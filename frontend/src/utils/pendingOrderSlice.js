import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
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
=======
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
>>>>>>> e04be9ec0a8ffe43c70f041fc0f76ad8b264bc5e

export default pendingOrderSlice.reducer
export const {addPendingOrder,removePendingOrder} = pendingOrderSlice.actions
