"use client"
import React, { useState } from "react"
import Login from "@/components/Login"
import Signup from "@/components/Models/Signup"
import Navbar from "../Navbar/Navbar"
import Image from "next/image"
import Link from "next/link"
import frontImage from "../../../public/frontImage.jpg"
import logo from "../../../public/AAlogo-removebg-preview.png"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import ToDoList from "@/components/ToDoListModal/ToDoList"
export default function Auth() {

    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false)
    const [showToDoList,setShowToDoList] = useState(false);
    const handleLogin = () => {
        setShowSignup(!showSignup)
        setShowLogin(!showLogin)
    }
    return (
        <>
        {showToDoList && <ToDoList showToDoList={showToDoList} setShowToDoList={setShowToDoList}/>}
            <Navbar onSignupClick={() => setShowSignup(true)}></Navbar>
            {showSignup && <Signup setCloseModal={() => setShowSignup(!showSignup)} openLoginModal={() => handleLogin()} />}
            {showLogin && <Login setCloseModalLogin={() => setShowLogin(!showLogin)} />}

            <div className="h-2 w-[100vw] bg-sky-200"></div>
            <div className="h-2 w-[100vw] bg-pink-300 my-1.5"></div>


            <div className="flex  md:flex-row flex-col mx-20 h-[80vh]  justify-center items-center">
                <div className="text w-[50vh] flex flex-col justify-center  ">
                    <div className="upper h-[500px] w-[600px] bg-slate-200 rounded-full p-5 flex justify-center my-6 ">
                        <p className=" w-[300px] my-32 font-light  mr-20 ">Welcome to <span className="font-extrabold">AlogArena</span>, your ultimate coding destination! Our platform offers an advanced environment for writing, debugging, and optimizing code with ease. Tailored for developers of all levels, CodeSphere fosters innovation through collaboration, sharing, and learning. Dive into our rich resources and community insights to elevate your programming projects to new heights.</p>
                    </div>

                    <div className="lower  flex justify-center  ">
                        
                    </div>
                </div>
                <div className="image flex flex-col">
                    <div><Image className="rounded-full mb-12  shadow-cyan-200 shadow-xl mx-12" width={500} src={frontImage} alt="" /></div>


                </div>


            </div>

            <div className="flex justify-center my-[-12px]">
                <div className="buttons mr-32">
                <div className="">
                <button onClick={()=>{setShowToDoList(!showToDoList)}} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><span className="flex"><span>To_Do List</span> <span className="my-0.5 mx-1"><BiNotepad className="text-lg" /></span></span></button>
                <Link href={"/MakeNotes"}>
                            <button type="button" className= "  text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><span className="flex"><span>Make Notes</span> <span className="my-0.5 mx-1"><BiNotepad className="text-lg" /></span></span></button>
                            </Link>
                            <Link href={"/HaveFun"}>
                            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><span className="flex"><span>Have Fun</span> <span className="my-0.5 mx-1"><IoGameControllerOutline className="text-lg" />

</span></span></button>
</Link>
                        </div>
                </div>
                <div className="links flex  ">
                    <ul className="flex my-2">
                        <li className="mx-2 font-extrabold text-2xl"><FaInstagram /></li>
                        <li className="mx-2 font-extrabold text-2xl"><CiFacebook /></li>
                        <li className="mx-2 font-extrabold text-2xl"><CiTwitter /></li>
                        <li className="mx-2 font-extrabold text-2xl"><FaGithub /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}