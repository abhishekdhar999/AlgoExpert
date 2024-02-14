"use client"
import React,{useState} from "react"
import Login from "@/components/Login"
import Signup from "@/components/Models/Signup"
import Navbar from "../Navbar/Navbar"
export default function Auth(){
    
    const [showSignup, setShowSignup] = useState(false); 
    const [showLogin,setShowLogin] = useState(false)

    const handleLogin = ()=>{
        setShowSignup(!showSignup)
        setShowLogin(!showLogin)
    }
    return(
        <>
        <Navbar onSignupClick={()=>setShowSignup(true)}></Navbar>
        {showSignup && <Signup setCloseModal={()=>setShowSignup(!showSignup)} openLoginModal={()=>handleLogin()} />}
        {showLogin &&  <Login setCloseModalLogin={()=>setShowLogin(!showLogin)}/>}

        </>
    )
}