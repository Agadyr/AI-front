import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        isAuth:false
    },reducers:{
        authorize:(state, action) => {
            state.isAuth = true 
            localStorage.setItem("token", action.payload)
        },
        logout:(state, action) => {
            state.isAuth = false
            localStorage.removeItem("token")
        }
    }
})

export const {authorize, logout} = AuthSlice.actions

export default AuthSlice.reducer