// import Problem from "../ProblemPage/page"
"use client"
import { useEffect, useState } from "react"
import ProblemTable from "../ProblemTable/ProblemTable"
import { doc, orderBy, setDoc } from "firebase/firestore"; 
import { firestore } from "../firebase/firebase";
// const db = require("../../config").db;
import {collection,query,where,getDocs} from "firebase/firestore"
export default function ProblemSection(){

	const [inputs,setInputs] = useState({
		id:"",
		title:"",
		difficulty:"",
		category:"",
		videoId:"",
		link:"",
		order:0,
		likes:0,
		dislikes:0,

	})

	const  handleChange= (e:any) =>{
		setInputs({...inputs,[e.target.name]: e.target.value })
	}
	const handelSubmit = async (e:any)=>{
		e.preventDefault();
		const newProblem ={
			...inputs,
			order:Number(inputs.order)
		}
		await setDoc(doc(firestore, "problems", inputs.id),newProblem );
		alert("saved to db")
	}
// const [problems,setProblems] = useState([])
// 	const getProblems =async () => {
// 		const q = query(collection(firestore,"problems"),orderBy("order","asc"));
// 		const querySnapshot = await getDocs(q);
// 		const temp = [];
// 		querySnapshot.forEach((doc) => {
// 			temp.push( {id : doc.id, ...doc.data()});
// 		});
// 		setProblems(temp)
// 	}
// 	useEffect( ()=>{
// 		getProblems()
// 	},[])
    return(
        <>
        <div className='relative overflow-x-auto mx-auto px-6 pb-10 bg-black'>
					{/* {loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)} */}
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
						{/* {!loadingProblems && ( */}
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Solution
									</th>
								</tr>
							</thead>
						{/* )} */}
						<ProblemTable  />
					</table>
				</div>


				<form onSubmit={handelSubmit}className=" bg-black p-6 flex flex-col max-w-sm gap-3">
					<input onChange={handleChange} type="text" placeholder="problem id" name="id" />
					<input onChange={handleChange} type="text" placeholder="title" name="title" />
					<input onChange={handleChange} type="text" placeholder="difficulty" name="difficulty" />
					<input onChange={handleChange} type="text" placeholder="category" name="category" />
					<input onChange={handleChange} type="text" placeholder="videoId?" name="videoId" />
					<input onChange={handleChange} type="text" placeholder="link?" name="link" />
					<input onChange={handleChange} type="text" placeholder="order" name="order" />
					<button className="bg-white ">save to firestore</button>
				</form>
        </>
    )
}