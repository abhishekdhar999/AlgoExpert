import { useState } from "react";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import {app}  from  "@/app/firebase/firebase";
// import { useRouter } from "next/router";
import { auth } from "@/app/firebase/firebase";
interface NavbarProps {
    setCloseModal: () => void;
    openLoginModal:()=> void;
  }

export default function Signup({setCloseModal,openLoginModal}:NavbarProps) {
    // const setAuthModalState = useSetRecoilState(authModalState);
    // const handleClick = ()=>{
    //     setAurhModalState((prev)=>({...prev,type:"login"}));
    // };
    const [inputs,setInputs] = useState({name:"",email:"",password:""});
const auth = getAuth(app);
// createUserWithEmailAndPassword(auth,inputs.email, inputs.password).then((credential)=>{
//     console.log("Successfully created user account with email: ", credential.user.email);
// }).catch((error)=>{
//     var errorCode=error.code;
//         alert(errorCode);
//       });

    
//  const router = useRouter();
// const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log("handlechange");
    setInputs({ ...inputs ,[e.target.name]: e.target.value });
}
    const handleRegister = async () => {
        console.log("innnn")
// e.preventDefault();
if(!inputs.email || !inputs.password||!inputs.name){
return alert("please fill all the fields");
}
try {
    console.log(inputs.email,inputs.password)
    const newUser = await createUserWithEmailAndPassword(auth,inputs.email,inputs.password);
    console.log("new user",newUser)
     if(!newUser)return;
    //  router.push("/");

} catch (error:any) {
    alert(error.message)
}
    }
    return(
        <>

{/* <!-- Main modal --> */}
<div id="authentication-modal"  aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Sign in to our platform
                </h3>
                <button onClick={setCloseModal} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
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
                        {/* <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                        <input onChange={handleChangeInput} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required/>
                    </div>
                    <div>
                        {/* <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                        <input onChange={handleChangeInput} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        {/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label> */}
                        <input onChange={handleChangeInput} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                
                            </div>
                            {/* <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label> */}
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button onClick={handleRegister} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Acount</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an acount? <button onClick={openLoginModal} className="text-blue-700 hover:underline dark:text-blue-500">Login here</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 

        </>
    )
}
