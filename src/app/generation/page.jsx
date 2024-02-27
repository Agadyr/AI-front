'use client'

import Header from "@/components/header"
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function generation(){
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const [input, setInput] = useState("")
    const [answer, setAnswer] = useState("")

    const save = () => {
        if(input.length <= 5){
            setInput("Minimum required 5 symbols")
        }else{
            
        }
    }
    return (
        <div>
            <Header/>
            <div className="py-5"></div>
            <div className="chat-container">
            <div className="input-chat">
                    <input disabled={disabledInput} className="form-control border shadow-sm" onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder="Text..."/>
                    <button onClick={() => setInput("")} className="btn btn-closed mx-2">&#10007;</button>
                    <button onClick={() => save()} className="btn btn-send mx-2">&#10003;</button>
                </div>
            </div>
        </div>
    )
}