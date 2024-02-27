'use client'

import Header from "@/components/header"
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function ChatterBlast(){
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <Header/>
            <div className="py-5"></div>
            <div className="chat-container">
                <h1>Text to chat please</h1>
                <div className="input-chat">
                    <input className="form-control border shadow-sm" onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder="Text..."/>
                    <button className="btn btn-closed mx-2">&#10007;</button>
                    <button className="btn btn-send mx-2">&#10003;</button>
                </div>
            </div>
        </div>
    )
}