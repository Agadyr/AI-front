'use client'

import Header from "@/components/header"
import Link from "next/link"
export default function Home(){
    return (
        <div>
            <Header/>
            <div className="py-5"></div>
            <h1 className="ti main-word">Which one Do you want no try?</h1>
            <div className="ai">
                <div className="ai-tems">
                    <h3>Chatter Blast</h3>
                    <h4>AI chat service</h4>
                    <div className="btn-div">
                        <Link href="/chatterblast" className="btn btn-try">Try it</Link>
                    </div>
                </div>
                <div className="ai-tems">
                <h3>Dream Weaver</h3>
                    <h4>AI image generation</h4>
                    <div className="btn-div">
                        <Link href="/generation" className="btn btn-try">Try it</Link>
                    </div>
                </div>
                <div className="ai-tems">
                <h3>Mind Reader</h3>
                    <h4>AI Recognition objects on Image</h4>
                    <div className="btn-div">
                        <Link href="/mind" className="btn btn-try">Try it</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}