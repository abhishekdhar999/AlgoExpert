"use client"
import {useState} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore, auth } from "@/app/firebase/firebase";
import { doc, setDoc, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import { useRouter } from 'next/navigation';
interface NotesComponentProps{
    note:any,
    input:any,
    setInput:any
}
export default function NotesComponent({note,input,setInput}:NotesComponentProps){
    const router = useRouter();
    const [isEditing,setIsEditing] = useState(false)
    const [viewNote,setViewNote] = useState(false);
    const [user] = useAuthState(auth);
    // const [edit,setEdit] = ()
    const handleToggle = ()=>{
setViewNote(!viewNote);
    }
    const handleRefresh = () => {
        router.refresh;
      };
    const handleEdit = ()=>{
setViewNote(false)
setIsEditing(true)
setInput({...input,title:note.title,content:note.content})
setIsEditing(false)
    }

const handleDelete = ()=>{
    if(user){
deleteNote(user?.uid,note.id)
    }
    handleRefresh

}

    const deleteNote = async (userId: any, noteId:any) => {
       
console.log(userId +"userID ---- note id"+ noteId)
        const userDocRef = doc(firestore, "users", userId); // Get a reference to the user's document

        try {
            const docSnap = await getDoc(userDocRef); // Get the current snapshot of the user's document
            
        
        if (docSnap.exists()) {
            let notes = docSnap.data().Notes || []; // Get existing notes, default to empty array if undefined
            
            const updatedNotes = notes.filter((n: { id: any; }) => n.id !== noteId); // Find the index of the note with the same id
            console.log("updatedNotes",updatedNotes)
            
            await updateDoc(userDocRef, {
                Notes: updatedNotes // Add the new task to the tasks array
            })
            router.refresh(); 
        }else {
            console.error("User document does not exist.");
        }

            console.log("Task deleted successfully!");
        } catch (error) {
            console.error("Error deleting task to user: ", error);
        }
        
    }

    return(
        <>





{/* <!-- Main modal --> */}
{viewNote && <div id="static-modal" data-modal-backdrop="static"  aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {note.title}
                </h3>
                <button onClick={handleToggle} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {note.content}
                </p>
               
            </div>
            {/* <!-- Modal footer --> */}
            <div onClick={handleEdit} className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="static-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
                
            </div>
        </div>
    </div>
</div>
}


<div className="my-2  mx-2 shadow-2xl max-w-sm p-6 bg-neutral-500 border border-gray-500 rounded-lg   shadow-slate-900 ">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 ">{note.title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
    <div className='flex'>

    <button onClick={handleToggle} type="button" className="text-gray-700 bg-slate-200 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">view</button>


    <button onClick={handleDelete} type="button" className="text-gray-700  focus:ring-4 focus:outline-none  bg-slate-200 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">delete</button>
    </div>
    
</div>

        </>
    )
}