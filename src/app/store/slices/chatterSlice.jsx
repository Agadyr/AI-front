import { createSlice } from "@reduxjs/toolkit";
import { END_POINT } from "@/app/config/helper";
import axios from "axios";
    
export const chatterSlice = createSlice({
    name:"auth",
    initialState:{
        answer:{},
        partial:{},
        error: {},
        disabled: false
    },
    reducers:{
        start:(state, action) => {
            state.answer = action.payload
        },
        partial:(state,action) => {
            state.partial = action.payload
        },
        error:(state, action) => {
            state.error = action.payload
        },
        disabled:(state, action) => {
            state.disabled = action.payload
        },
        reset:(state, action) => {
            state.error = {}
            state.answer = {}
            state.partial = {}
        }
    }
})

export const {start, partial, error, disabled, reset} = chatterSlice.actions

export default chatterSlice.reducer