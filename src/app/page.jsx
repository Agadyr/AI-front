'use client'
import Header from "@/components/header"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Main(){
    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()
    const save = () => {
        if(input.length <= 5){
            setError("Token field is required")
        }else{
            router.push("/home")
        }
    }
    return (
        <div>
            <Header/>
            <section className="auth-token">
                <div className="py-5">
                </div>
                <form action="">
                    <h1>Set your Token</h1>
                    <div className="form-floating">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" id="token" className="form-control" placeholder="" />
                        <label htmlFor="token">Your token</label>
                        {error.length >= 1 && <p className="text-danger">{error}</p>}
                        <button type="button" className="btn btn-primary w-100 mt-3" onClick={() => save()}>Next</button>
                    </div>
                </form>
            </section>
        </div>
    )
}