import { END_POINT } from "@/app/config/helper";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const generateSlice = createSlice({
    name:"generate",
    initialState:{
        job: {},
        status: {},
        disabled: false,
        error:{},
        result:{}
    },reducers:{
        genJob:(state, action) => {
            state.job = action.payload
        },
        genStatus:(state, action) => {
            state.status = action.payload
        },
        disable:(state, action) => {
            state.disabled = action.payload
        },
        error:(state, action) => {
            state.error = action.payload
        },
        reset:(state) => {
            state.job  = {},
            state.status = {},
            state.disabled = {}
        },
        end:(state, action) => {
            state.result = action.payload
        }
    }
})

export const {genJob, genStatus, disable, error, reset, end} = generateSlice.actions

