import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import  notesReducer  from "./notesStore";
import  bookReducer  from "./bookStore";

export const store = configureStore({
    reducer:{
        user : userReducer,
        notes : notesReducer,
        books : bookReducer,
        
    }
})