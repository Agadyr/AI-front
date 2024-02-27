'use client'

import Header from "@/components/header"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CreateJob, end } from "../store/slices/generationSlice"
import { reset } from "../store/slices/chatterSlice"

export default function generation(){
    const dispatch = useDispatch()


    const errorFromBack = useSelector(state => state.generate.error)
    const job = useSelector(state => state.generate.job)
    const status = useSelector(state => state.generate.status)
    const disabled = useSelector(state => state.generate.disabled)
    const result = useSelector(state => state.generate.result)

    const [error, setError] = useState("")
    const [input, setInput] = useState("")
    const [answer, setAnswer] = useState("")

    const save = () => {
        if(input.length <= 5){
            setError("Minimum required 5 symbols")
        }else{
            dispatch(CreateJob({text_prompt:input}))
            setAnswer(input)
            setInput("")
            setError("")
            dispatch(end())
        }
    }

    useEffect(() => {dispatch(reset())}, [])
    useEffect(() => {setError(error), [errorFromBack]})
    console.log(status);
    console.log(job)

    // useEffect(() => {

    // }, [status])
    return (
        <div>
            <Header/>
            <div className="py-5"></div>
            <div className="chat-container">
               {(errorFromBack || error) && <section className="df aic jcc">
                    <div>
                        {error && <h5 className="text-danger">{error}</h5>}
                        <h4 className="text-danger">{errorFromBack.title}</h4>
                        <p className="text-danger">{errorFromBack.status} {errorFromBack.detail}</p>
                    </div>
                </section>}
                <h4 className="ti mb-2">{status.progress ?? 0}%</h4>

                {answer && <div className="mt-2 mb-2">
                    <h2>You: </h2>
                    <div className="card p-3 shadow-sm border">
                        <p style={{textAlign:"left"}}>{answer}</p>
                    </div>
                </div>}

                {status.progress && <div className="img_gen">
                    <img src={result.image_url ?? status.image_url} alt="" />
                </div>}

                <div className="input-chat">
                    <input disabled={disabled} className="form-control border shadow-sm" onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder="Text..."/>
                    <button type="button" onClick={() => setInput("")} className="btn btn-closed mx-2">&#10007;</button>
                    <button type="button" onClick={() => save()} className="btn btn-send mx-2">&#10003;</button>
                </div>
            </div>
        </div>
    )
}