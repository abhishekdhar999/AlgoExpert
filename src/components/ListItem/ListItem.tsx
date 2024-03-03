"use client"
import { FaRegTrashAlt } from "react-icons/fa";
import { doc, setDoc, updateDoc, getDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { firestore, auth } from "@/app/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
interface ListItemProps {
    item: any,
    change: boolean,
    setChange: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ListItem({ item, change, setChange }: ListItemProps) {

    //     const [finalTasks, setFinalTasks] = useState([]);

    //     useEffect(() => {
    //         // Define a function to fetch tasks
    //         const fetchTasks = async () => {
    //             const userDocRef = doc(firestore, "users", user!.uid,"tasks"); // Get a reference to the user's document
    //             try {
    //               // Fetch the current tasks
    //               const userDocSnap = await getDoc(userDocRef);
    //               if (userDocSnap.exists()) {
    //                 const userData = userDocSnap.data();
    //                 const{tasks} =userData
    //                 setFinalTasks(tasks);
    //             // const tasksSnapshot = await getDoc(collection(firestore, "users", user?.uid, "tasks"));
    //             // const tasksList = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //             // setTasks(tasksList);
    //         };
    //     }catch{
    //         console.log("error in fetch Tasks")
    //     }
    // }
    //          fetchTasks();
    //     }, []);

    const [user] = useAuthState(auth);

    const handleDelete = () => {
        if (user) {
            // setLen(len+1);
            deleteTaskToUser(user?.uid, item.id)
            setChange(!change)
        } else {
            return;
        }
    }

    const deleteTaskToUser = async (userId: any, id: any) => {
        const userDocRef = doc(firestore, "users", userId); // Get a reference to the user's document
        try {
            // Fetch the current tasks
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                const updatedTasks = userData.tasks.filter((task: { id: any; }) => task.id !== id); // Assuming each task is an object with an 'id' propert
                // Update the document with the filtered tasks
                await updateDoc(userDocRef, {
                    tasks: updatedTasks
                });
                console.log("Task removed successfully!");
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error removing task from user: ", error);
        }
    }
    return (
        <>
            <div className="">

                <div className="  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">

                    <div className="flex  justify-between p-4   leading-normal">
                        <div className="overflow-scroll">
                            <p className="mb-3 font-normal text-white dark:text-gray-400 ">{item.text}</p>

                        </div>

                        <div className="">
                        <button onClick={handleDelete} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mx-4"><FaRegTrashAlt /></button>


                    </div>
                    </div>
                    
                </div>





            </div>
        </>
    )
}