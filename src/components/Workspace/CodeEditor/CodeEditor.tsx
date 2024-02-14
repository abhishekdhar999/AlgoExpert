"use client"
import CodeEditorNavbar from "./CodeEditorNavbar/CodeEditorNavbar"
 import CodeMirror from "@uiw/react-codemirror"
import vscodeDark from "@uiw/codemirror-theme-vscode"
import {javascript} from "@codemirror/lang-javascript"
// import 'codemirror/mode/javascript/javascript';
import Editor, { DiffEditor, useMonaco, loader } from 
'@monaco-editor/react';
import React from 'react';
import ReactDOM from 'react-dom';
import EditorFooter from "./EditorFooter/EditorFooter"
// import Editor from '@monaco-editor/react';
export default function CodeEditor(){
   const boilerplate = `function twosum(nums,target){
// write your code here
   };`
    const handleSubmit = ()=>{

   } 

  
return(
    <>
    <div className="flex flex-col bg-black relative">
    <CodeEditorNavbar/>

    <div className="flex flex-col ">
<div className="h-[">
     {/* <CodeMirror
     value="const a = 1"
     height={200}
     extensions={[javascript({ jsx: true })]}
    />  */}
    <Editor height="50vh" defaultLanguage="javascript" defaultValue={boilerplate} />;
</div>

<div className="w-full px-5 overflow-auto">
    <div className="flex h-10 items-center space-x-6">
        <div className="relative flex h-full flex-col justify-center cursor-pointer">
            <div className="text-sm font-medium leading-5 text-white">Testcases</div>
            <hr className="absolute bottom-0 h-0.5 w-full rounde-full border-none bg-white"/>
        </div>

    </div>
    {/* body */}
    <div className="flex">
        <div className="mr-2 items-start mt-2 text-white">
            <div className="flex flex-wrap items-center gap-y-4">
                <div className="font-medium items-center trabsition-all focus:outline-none inline-flex bg-gray-500 hover:bg-blue-500 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap ">case1</div>
            </div>
        </div>

        <div className="mr-2 items-start mt-2 text-white">
            <div className="flex flex-wrap items-center gap-y-4">
                <div className="font-medium items-center trabsition-all focus:outline-none inline-flex bg-gray-500 hover:bg-blue-500 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap ">case2</div>
            </div>
        </div>

        <div className="mr-2 items-start mt-2 text-white">
            <div className="flex flex-wrap items-center gap-y-4">
                <div className="font-medium items-center trabsition-all focus:outline-none inline-flex bg-gray-500 hover:bg-blue-500 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap ">case3</div>
            </div>
        </div>
    </div>
</div>


<div className="font-semibold bg-black">
    <p className="text-white text-sm font-medium mt-4 ">input</p>
    <div className="w-full cursor-text rounded-lg border px-3 py-[10px] text-white">Nums : [2,7,11,15], target : 9</div>
    <p className="text-sm font-medium mt-f text-white">output</p>
    <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-black border-transparent text-white mt-2">[0,1]</div>
</div>

<EditorFooter  handleSubmit={handleSubmit} />

    </div>
</div>
    
    </>
)
}