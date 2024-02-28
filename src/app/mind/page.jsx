'use client'

import Header from "@/components/header"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { recognize, setError } from "../store/slices/mindSlice"

export default function Mind(){

    const [image,setImage] = useState(null)
    const [file, setFIle] = useState(null)

    const object = useSelector(state => state.mind.object)
    const error = useSelector(state => state.mind.error)

    const dispatch = useDispatch()
    const handle = (event) => {
        const file = event.target.files[0]
        setFIle(file)
        
        const url = URL.createObjectURL(file)
        setImage(url)
        dispatch(setError(""))
    }
    return (
        <div>
        <Header/>
        <div className="py-5"></div>
        <div className="chat-container df aic fd">
            <div className="btn-file">
                <button className="btn-try ">Upload</button>
                <input onChange={handle} type="file" name="" id="" />
            </div>


            {image && <div className="rec_img df aic jcc">
                <img src={image} alt="" />
            </div>}

            {error && <div className="df aic jcc fd mt-2">
                    <h4 className="text-danger">{error.status} {error.title}</h4>
                    <p className="text-danger">{error.detail}</p>
            </div>}

            <div className="df aic jcc">
                {image && <button onClick={() => dispatch(recognize(file))} className="btn btn-try">Recognize</button>}
            </div>

            {object.name && <p className="mb-2 ti">The recognition object: {object.name} with <span className="text-danger"> {object.probability}%</span> probability</p>}
            {object.name && <div className="mr-item">
                <div className="item" style={{
                    'top':object.bounding_box.y + 'px',
                    'left': object.bounding_box.x + 'px',
                    'width' : 200*((object.bounding_box.width/((object.bounding_box.width + object.bounding_box.x)/100))/100) + 'px',
                    'height': 200*((object.bounding_box.height/((object.bounding_box.height + object.bounding_box.y)/100))/100) + 'px'
                }}>
                </div>
                <img src={image} alt="" />
            </div>}
        </div>
        </div>
    )
}