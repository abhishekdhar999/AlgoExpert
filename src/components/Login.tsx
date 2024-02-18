"use client"
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app}  from  "@/app/firebase/firebase";


interface NavbarProps {
    setCloseModalLogin: ()=> void ;
    // openLoginModal:()=> void
  }
export default function Login({setCloseModalLogin}:NavbarProps) {
    const [inputs,setInputs] =useState({email:"",password:""});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setInputs({ ...inputs ,[e.target.name]: e.target.value });
    }
    const auth = getAuth(app);
  
    const handleRegister = async()=>{
        if(!inputs.email || !inputs.password){
            return alert("please fill all the fields");
            }
        try {
            console.log(inputs.email,inputs.password)
            const loginUser = await signInWithEmailAndPassword(auth, inputs.email, inputs.password)
            console.log("login user ",loginUser)
            if(!loginUser)return
        } catch (error) {
            
        }
    }
    
    
  
    return(
        <>
        <div id="authentication-modal"  aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Sign in to our platform
                </h3>
                <button onClick={setCloseModalLogin} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
                
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input onChange={(handleChange)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    
                    <button onClick={handleRegister} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an acount? <button onClick={openLoginModal} className="text-blue-700 hover:underline dark:text-blue-500">Login here</button>
                    </div> */}
                </form>
            </div>
        </div>
    </div>
</div> 
        </>
    )
}