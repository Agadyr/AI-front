'use client'

import Header from "@/components/header"
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function Mind(){

    const [image,setImage] = useState(null)
    const [file, setFIle] = useState(null)

    const dispatch = useDispatch()
    const handle = (event) => {
        const file = event.target.files[0]
        setFIle(file)
        
        const url = URL.createObjectURL(file)
        setImage(url)
    }
    return (
        <div>
        <Header/>
        <div className="py-5"></div>
        <div className="chat-container">
            <div className="btn-file">
                <button className="btn-try ">Upload</button>
                <input onChange={handle} type="file" name="" id="" />
            </div>

            {image && <div className="rec_img df aic jcc">
                <img src={image} alt="" />
            </div>}
        </div>
        </div>
    )
}