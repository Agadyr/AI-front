import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './slices/authSlice'
import ChatterReducer from './slices/chatterSlice'
export default configureStore({
    reducer:{
        auth:AuthReducer,
        chat:ChatterReducer
    }
})