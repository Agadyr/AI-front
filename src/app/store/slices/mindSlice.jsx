import { END_POINT } from "@/app/config/helper";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const mindSlice = createSlice({
    name:"mind",
    initialState:{
        object:{},
        error:{}
    },reducers:{
        rec:(state, action) => {
            state.object = action.payload
        },
        setError:(state, action) => {
            state.error = action.payload
        }
    }
})

export const {res, setError} = mindSlice.actions


