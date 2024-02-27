'use client'

import Header from "@/components/header"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StartConversation, start } from "../store/slices/chatterSlice"

export default function ChatterBlast(){
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const errorFromBack = useSelector(state => state.chat.error)
    const disabled = useSelector(state => state.chat.disabled)
    const dispatch = useDispatch()

    const save = () => {
        if (input.length < 5) {
            setError("Minimum required 5 symbol")
        }else{
            dispatch(StartConversation(input))
            setInput("")
            setError("")
        }
    }


    return (
        <div>
            <Header/>
            <div className="py-5"></div>
            <div className="chat-container">
                <h1>Text to chat please</h1>
                <div className="input-chat">
                    <input className="form-control border shadow-sm" onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder="Text..."/>
                    <button onClick={() => setInput("")} className="btn btn-closed mx-2">&#10007;</button>
                    <button onClick={() => save()} className="btn btn-send mx-2">&#10003;</button>
                </div>
            </div>
        </div>
    )
}