import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import  notesReducer  from "./notesSlice";
import  bookReducer  from "./bookSlice";
<<<<<<< HEAD
import  completedOrderReducer  from "./completedOrderslice";
import  pendingOrderReducer  from "./pendingOrderSlice";
import  requestReducer  from "./requestSlice";
=======
import  requestReducer  from "./requestSlice";
import  completedOrderReducer  from "./completedOrderSlice";
>>>>>>> e04be9ec0a8ffe43c70f041fc0f76ad8b264bc5e

export const store = configureStore({
    reducer:{
        user : userReducer,
        notes : notesReducer,
        books : bookReducer,
<<<<<<< HEAD
        completedOrder : completedOrderReducer,
        pendingOrder : pendingOrderReducer,
        request : requestReducer
=======
        request : requestReducer,
        completedOrder : completedOrderReducer
>>>>>>> e04be9ec0a8ffe43c70f041fc0f76ad8b264bc5e
    }
})