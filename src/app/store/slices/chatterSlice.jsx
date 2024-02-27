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

export const StartConversation = (input) =>  async(dispatch) => {
    const headers = {
        'x-api-token': localStorage.getItem('token')
    }

    dispatch(disabled(true))
    const res = await axios.post(`${END_POINT}/chat/conversation`, {text_prompt:input} , {headers}).then((res) => {
        return res.data
    })

    if(res.status == 401 || res.status == 400 || res.status == 403 || res.status == 503){
        dispatch(error(res.data))
    }else{
        dispatch(start(res.data))
        setTimeout(() => {
            
        }, 1000);t
    }
}

export const getPartial = (conversation_id) => async(dispatch) => {
    const headers = {
        "x-api-token" : localStorage.getItem("token")
    }
    const res = await axios.get(`${END_POINT}/chat/conversation/${conversation_id}`).then((res) => {
        dispatch(partial(res.data))
        return res.data
    })
    dispatch(disabled(false))
    if(res.status == 401 || res.status == 400 || res.status == 403 || res.status == 503){
        dispatch(error(res.data))
    }
}

export default chatterSlice.reducer