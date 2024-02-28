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

export const {rec, setError} = mindSlice.actions

export const recognize = (image) => async(dispatch) => {
    const form = new FormData()
    form.append("image", image)

    const headers = {
        "x-api-token": localStorage.getItem("token")  
    }
    const res = await axios.post(`${END_POINT}/imageRecognition`, form , {headers}).then((res) => {
        if(res.data.status == 400 || res.data.status == 401 || res.data.status == 403 || res.data.status == 503){
            dispatch(setError(res.data))
        }else{
            dispatch(rec(res.data.objects[0]))
            dispatch(setError(""))
            return res.data
        }

    })



}


export default mindSlice.reducer