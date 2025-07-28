import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
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
=======
const requestSlice = createSlice({
    name : 'request',
    initialState:[],
    reducers:{
        addRequest:(state,action)=> {
            state.push(action.payload)
        },
        removeRequest:(state,action)=> {
            state = state.filter((item)=> item.id !== action.payload.id)
        }
    }
})
>>>>>>> e04be9ec0a8ffe43c70f041fc0f76ad8b264bc5e

export default requestSlice.reducer
export const {addRequest,removeRequest} = requestSlice.actions
