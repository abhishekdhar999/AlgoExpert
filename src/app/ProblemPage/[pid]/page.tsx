"use client"
import { useEffect } from "react"
import Workspace from "@/components/Workspace/Workspace"
import { problems } from "@/app/utils/problems"
import Split from "split.js"
// import { Problem } from "../utils/types/problem"
import {Problem }from "../../utils/types/problem";
// import { useServerData } from 'next/navigation';
import { useRouting } from 'expo-next-react-navigation'
import { NextRequest, NextResponse } from "next/server"
import { useParams } from 'next/navigation';
interface ProblemPageProps {
problem:Problem
}


export async function getStaticPaths(){
    
    const paths = Object.keys(problems).map((key)=>({
       
        params:{pid:key}
    }))
     console.log("getstaticpaths",paths)
    
    return{
        paths,
         fallback:false
    }
}
export async function getServerSide({ params }:{params:{pid:string}}) {
    const { pid } = params; // Access the dynamic route parameter
    const id  = pid.toString();
  console.log("pid",pid)
    // Fetch data using pid
    // const data = await fetchData(pid);
  
    return {
      props: {
        // data,
      },
    };
  }

  



export default function ProblemPage({problem}:ProblemPageProps){
    const params = useParams();
//   const pid = params.pid;
const {pid} = params;
  console.log("pid",pid)
  const id  = pid.toString();
  const problemss = problems[id];
    console.log(problemss);
    if(!problemss) throw new Error("not found problrm problem-page")
    
    problemss.handlerFunction = problemss.handlerFunction.toString(); 
//     return{
// props:{
//     problem
// }}

    

    return(
        <>
        <Workspace problem={problemss}/>
        </>
    )
}



