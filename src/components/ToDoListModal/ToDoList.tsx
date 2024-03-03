"use client"
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { doc, setDoc,updateDoc,getDoc,arrayUnion } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore,auth } from "@/app/firebase/firebase";
import ListItem from "../ListItem/ListItem";
interface ToDoListProps{
    setShowToDoList:React.Dispatch<React.SetStateAction<boolean>>,
    showToDoList:boolean
}
export default function ToDoList({setShowToDoList,showToDoList}:ToDoListProps) {
    const [user] = useAuthState(auth);
    const [length,setLength] =useState(0)
    
    const [finalTasks, setFinalTasks] = useState([]);

   
    const [allTasks,setAllTasks] = useState([])
    // useEffect(()=>{
    //     toDoList();
    // },[user,finalTasks,addTaskToUser])
    
    const  toDoList = async ()=>{
        const userRef = doc(firestore, "users", user!.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    const data = userSnap.data();
                    const {tasks} = data
                    setLength(tasks.length)
                    setAllTasks(tasks)
                }
                
            }
    const [ len,setLen] = useState(1)
    const [task , setTask] = useState({text:"",id:len+1});
    const [change,setChange] = useState(false)
    let leng = 1;
    const handleAdd = async ()=>{
        leng++;
        console.log("len",len)
        if(user){
            setLen(len+1);
            addTaskToUser(user?.uid,task)
        }else{
            return;
        }
        setChange(!change)
        //  setTask({text:"",id:0})
        
    }
    const handleChange = (e:any)=>{
        
            setTask({...task,[e.target.name]: e.target.value })
        
         
         console.log("task",task)
    }

   
    const addTaskToUser = async (userId:any, task:any) => {
        const userDocRef = doc(firestore, "users", userId); // Get a reference to the user's document
        
        try {
          await updateDoc(userDocRef, {
            tasks: arrayUnion(task) // Add the new task to the tasks array
          });
          console.log("Task added successfully!");
        } catch (error) {
          console.error("Error adding task to user: ", error);
        }
    }


    useEffect(() => {
        // Define a function to fetch tasks
        
        const fetchTasks = async () => {
            const userDocRef = doc(firestore, "users", user!.uid); // Get a reference to the user's document
            try {
              // Fetch the current tasks
              const userDocSnap = await getDoc(userDocRef);
              if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                const{tasks} =userData
                setFinalTasks(tasks);
            
        };
    }catch{
        console.log("error in fetch Tasks")
    }
}
          fetchTasks();
    }, [change, user,setChange]); 

    return(
        <>
        

{/* <!-- Modal toggle --> */}
{/* <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */}

{/* <!-- Main modal --> */}

<div id="default-modal"   className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button onClick={()=>setShowToDoList(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div> 
                
                {finalTasks.map((task,idx)=>{
                    return(<ListItem key={idx} item={task} change={change} setChange={setChange} />)
                })}
            </div>
            <div className="flex justify-between p-5">
                <div className="input ">
                    <input onChange={handleChange} name="text" type="text" className="rounded-xl h-14 w-96" placeholder="Add a task..."  />
                </div>
                <div className="buttons flex">
                    {allTasks.length<5?<button onClick={handleAdd} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><IoMdAdd /></button>
                :""}
                
                </div>
            </div>
            {/* <!-- Modal footer --> */}
            
        </div>
    </div>
</div>

        </>
    )
}