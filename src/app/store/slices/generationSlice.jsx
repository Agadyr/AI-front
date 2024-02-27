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

export const CreateJob = (text_prompt) => async(dispatch) => {
    const headers = {
        'x-api-token': localStorage.getItem("token")
    }

    dispatch(disable(true))
    const res = await axios.post(`${END_POINT}/imagegeneration/generation`, text_prompt, {headers}).then((res) => {
        dispatch(genJob(res.data))
        return res.data
    })
    
    if(res.status == 400 || res.status == 401 || res.status == 403 || res.status == 503){
        dispatch(error(res))
    }
}