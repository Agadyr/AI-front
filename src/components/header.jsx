'use client'
import { authorize, logout } from "@/app/store/slices/authSlice"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

export default function Header(){
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    return(
        <header>
            <h1>Ws Karaganda</h1>
            {isAuth && <Link href="/" onClick={() => dispatch(logout())}>Logout</Link>}
            {!isAuth && <Link href="/" >Login</Link>}
        </header>
    )
}