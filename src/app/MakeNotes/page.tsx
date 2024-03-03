"use client"
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore, auth } from "@/app/firebase/firebase";
import { doc, setDoc, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import NotesComponent from "@/components/NotesComponent/NotesComponent";
import { useRouter } from 'next/navigation'
import Router from 'next/router'



export default function MakeNotes() {
    const router = useRouter()
    
    const [allNotes,setAllNotes] = useState([])
    let [prev,setPrev] = useState(allNotes.length)
    const [user] = useAuthState(auth);
    const [ change,setChange] = useState(false)
    const [input, setInput] = useState({title: "", content: "" });
    
   
    
    const handleChange = (e: any) => {
        // setInput({ ...input, id:allNotes.length});
        setInput({ ...input, [e.target.name]: e.target.value })
        console.log("input", input)
    }
    const handleClick = () => {
        //add the note to the database with a unique id
        if (user) {
            const newNoteId = allNotes.length + 1;
            const newNote = { ...input, id: newNoteId };
            addNotesToUser(user?.uid, newNote)
        } else {
            return;
        }
    }

    useEffect(() => {
        // Fetch notes from Firestore and update `allNotes`
        const fetchNotes = async () => {
            if (user) {
                const userDocRef = doc(firestore, "users", user.uid);
                try {
                    const docSnap = await getDoc(userDocRef);
                    if (docSnap.exists() && docSnap.data().Notes) {
                        setAllNotes(docSnap.data().Notes);
                    } else {
                        setAllNotes([]);
                    }
                } catch (error) {
                    console.error("Error fetching notes: ", error);
                }
            }
        };
    
        fetchNotes();
    }, [user, change]);
    const addNotesToUser = async (userId: any, input: any) => {
        setChange(!change)

        const userDocRef = doc(firestore, "users", userId); // Get a reference to the user's document

        try {
            const docSnap = await getDoc(userDocRef); // Get the current snapshot of the user's document
            
        
        if (docSnap.exists()) {
            let notes = docSnap.data().Notes || []; // Get existing notes, default to empty array if undefined
            console.log("notes",notes)
            console.log("id",input.id)
            let maxId = notes.length > 0 ? Math.max(...notes.map((note: { id: number; }) => note.id)) : 0;
            input.id = maxId + 1;
             // Find the index of the note with the same id
            const noteIndex = notes.findIndex((note: { id: any; }) => note.id === input.id);
            console.log("noteIndex",noteIndex)
            if (noteIndex > -1) {
                // Note exists, update its content
                notes[noteIndex] = { ...notes[noteIndex], ...input }; // Update the note with new content
            } else {
                // Note doesn't exist, add as new
               
                notes = [...notes, input]; // Add the new note
            }
            await updateDoc(userDocRef, {
                Notes: notes // Add the new task to the tasks array
            })
            router.refresh
        }else {
            console.error("User document does not exist.");
        }

            console.log("Task added successfully!");
        } catch (error) {
            console.error("Error adding task to user: ", error);
        }
        
    }
    return (
        <>
            <div>

                <div className="heading flex  flex-col justify-center text-center">
                    <h2 className="text-5xl mx-12 mt-2 text-gray-700  w-[90vw] "><span className="text-shadow after: " >Make Notes.....</span></h2>
                    <h4 className="text-xl font-sans text-gray-500 mb-4">Make  quick notes, organize thoughts, and enhance productivity .</h4>
                </div>

<div className="h-[10px] w-[100vw] bg-gradient-to-br from-pink-500 to-orange-400"></div>

                <div className="text-area">

                    <form action="">
                        <div className="title my-2 mb-4 ">
                            {/* <label htmlFor="title" >Title: </label> */}
                            <input onChange={handleChange} className="w-[90vw] rounded-xl p-4  shadow-neutral-600 shadow-2xl  mx-12 border-solid  hover:border-white border-black" type="text" name="title" id="title" placeholder="Add your Title here....." value={input.title} />
                        </div>
                        <div className="">
                            <textarea onChange={handleChange} className="w-[90vw] rounded-xl p-4  shadow-neutral-600 shadow-2xl  mx-12 border-solid  hover:border-white border-black" name="content" id="" cols={40} rows={10} placeholder="Add your Note here....." value={input.content}></textarea>
                        </div>
                        <div className="btn flex justify-center my-4">
                            <button onClick={handleClick} type="button" className="text-white w-[90vw] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">save note</button>
                        </div>
                    </form>
                </div>


                <div>

                
                </div>
            </div>

            <div className=" flex flex-wrap ml-12 lg:ml-15 ">
                {allNotes.map((note,idx)=>{
                    return(
                        <div key={idx} className=" mx-2 md:w-[300px]">
                        <NotesComponent  key={idx} note={note} setInput = {setInput} input={input}/>
                        </div>
                    )
                })}

            </div>
        </>
    )
}