import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import  notesReducer  from "./notesSlice";
import  bookReducer  from "./bookSlice";
import  requestReducer  from "./requestSlice";
import  completedOrderReducer  from "./completedOrderSlice";

export const store = configureStore({
    reducer:{
        user : userReducer,
        notes : notesReducer,
        books : bookReducer,
        request : requestReducer,
        completedOrder : completedOrderReducer
    }
})