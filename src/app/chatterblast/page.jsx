'use client'

import Header from "@/components/header"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StartConversation, disabled, getPartial, reset, start } from "../store/slices/chatterSlice"

export default function ChatterBlast(){
    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    const [finish, setFinish] = useState("")

    const errorFromBack = useSelector(state => state.chat.error)
    const disabledInput = useSelector(state => state.chat.disabled)
    const answer = useSelector(state => state.chat.answer)
    const partial = useSelector(state => state.chat.partial)
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

    useEffect(() => {
        setInput("")
    }, [errorFromBack])
    
    useEffect(() => {
        if(partial.is_final == false){
            dispatch(getPartial(partial.conversation_id))
        }
        if(partial.is_final == true){
            setTimeout(() => {
                setFinish("Your chat has been finished")
            }, 3000);
        }

    }, [partial])

    useEffect(() => {
        dispatch(reset())
    }, [])

    return (
        <div>
            <Header/>
            <div className="py-5"></div>
            <div className="chat-container">
                {!answer.response && <h1 className="ti">Text to chat please!</h1>}

                {finish && <div className="df aic fd">
                    <p>Your chat has been finished</p>
                    <button className="btn btn-try" onClick={() => dispatch(reset(),setFinish(""))}>New Conversation</button>
                </div>}

                {(errorFromBack || error) && <div>
                        {error && <h5 className="text-danger ti">{error}</h5>}
                        <h4 className="text-danger ti">{errorFromBack.title}</h4>
                        <p className="text-danger">{errorFromBack.status} {errorFromBack.detail}</p>
                </div>}

                {answer.response && <div>
                    <h3 className="mt-3">You: </h3>
                    <div className="card p-3 border shadow-sm">
                        <span>{answer.response}</span>
                    </div>
                </div>}

                {partial.response && <div>
                    <h3 className="mt-3" style={{textAlign:"end"}}>Chatter Blast: </h3>
                    <div className="card p-4 border shadow-sm chat">
                        <span>{partial.response} <span className="typing">|</span></span>
                    </div>
                </div>}

                <div className="input-chat">
                    <input disabled={disabledInput} className="form-control border shadow-sm" onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder="Text..."/>
                    <button onClick={() => setInput("")} className="btn btn-closed mx-2">&#10007;</button>
                    <button onClick={() => save()} className="btn btn-send mx-2">&#10003;</button>
                </div>
            </div>
        </div>
    )
}