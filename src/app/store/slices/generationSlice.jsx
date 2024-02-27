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
        setTimeout(() => {
            dispatch(getStatus(res.data.job_id))
        }, 1000);
        return res.data
    })



    if(res.status == 400 || res.status == 401 || res.status == 403 || res.status == 503){
        dispatch(error(res))
    }
}

export const getStatus = (job_id) => async(dispatch) => {
    const headers = {
        "x-api-token":localStorage.getItem("token")
    }

    const res = await axios.get(`${END_POINT}/imagegeneration/getStatusJob/${job_id}`, {headers}).then((res) => {
        dispatch(genStatus(res.data))
        return res.data
    })

    if(res.status == 400 || res.status == 401 || res.status == 403 || res.status == 503){
        dispatch(error(res))
    }
    dispatch(disable(false))
}

export const finish = (job_id) => async(dispatch) => {
    const headers = {
        "x-api-token":localStorage.getItem("token")
    }
    const res = await axios.get(`${END_POINT}/imagegeneration/getResultJob/${job_id}`, {headers}).then((res) => {
        dispatch(end(res.data))
        return res.data
    })
    if(res.status == 400 || res.status == 401 || res.status == 403 || res.status == 503){
        dispatch(error(res))
    }
}

export const upscale = (resource_id) => async(dispatch) => {
    const headers = {
        "x-api-token":localStorage.getItem("token")
    }
    const res = await axios.post(`${END_POINT}/imagegeneration/upscale`, {resource_id:resource_id}, {headers}).then((res) => {
        dispatch(genJob(res.data))
        return res.data
    })
    if(res.status == 400 || res.status == 401 || res.status == 403 || res.status == 503){
        dispatch(error(res))
    }
}

export const zoomin = (resource_id) => async(dispatch) => {
    const headers = {
        "x-api-token":localStorage.getItem("token")
    }
    const res = await axios.post(`${END_POINT}/imagegeneration/zoomin`, {resource_id:resource_id}, {headers}).then((res) => {
        dispatch(genJob(res.data))
        return res.data
    })
    if(res.status == 400 || res.status == 401 || res.status == 403 || res.status == 503){
        dispatch(error(res))
    }
}

export const zoomout = (resource_id) => async(dispatch) => {
    const headers = {
        "x-api-token":localStorage.getItem("token")
    }
    const res = await axios.post(`${END_POINT}/imagegeneration/zoomOut`, {resource_id:resource_id}, {headers}).then((res) => {
        dispatch(genJob(res.data))
        return res.data
    })
    if(res.status == 400 || res.status == 401 || res.status == 403 || res.status == 503){
        dispatch(error(res))
    }
}

export default generateSlice.reducer