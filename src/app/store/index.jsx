import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './slices/authSlice'
import ChatterReducer from './slices/chatterSlice'
import GenerateReducer from './slices/generationSlice'
import MindReducer from './slices/mindSlice'
export default configureStore({
    reducer:{
        auth:AuthReducer,
        chat:ChatterReducer,
        generate:GenerateReducer,
        mind:MindReducer
    }
})