import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import  notesReducer  from "./notesSlice";
import  bookReducer  from "./bookSlice";
import  completedOrderReducer  from "./completedOrderslice";
import  pendingOrderReducer  from "./pendingOrderSlice";
import  requestReducer  from "./requestSlice";

export const store = configureStore({
    reducer:{
        user : userReducer,
        notes : notesReducer,
        books : bookReducer,
        completedOrder : completedOrderReducer,
        pendingOrder : pendingOrderReducer,
        request : requestReducer
    }
})