"use client"
import CodeEditorNavbar from "./CodeEditorNavbar/CodeEditorNavbar"
import CodeMirror from "@uiw/react-codemirror"
import vscodeDark from "@uiw/codemirror-theme-vscode"
import { javascript } from "@codemirror/lang-javascript"
// import 'codemirror/mode/javascript/javascript';
import Editor, { DiffEditor, useMonaco, loader, OnChange } from
    '@monaco-editor/react';
import React from 'react';
import ReactDOM from 'react-dom';
import EditorFooter from "./EditorFooter/EditorFooter"
import { Problem } from "@/app/utils/types/problem"
import { useState, useEffect } from "react";
import { useParams } from "next/navigation"
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore, auth } from "@/app/firebase/firebase"

import { toast } from "react-toastify";
// import { problems } from "@/utils/problems";
import { problems } from "@/app/utils/problems"
import { useRouter } from "next/router";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { handlerTwoSum } from "@/app/utils/problems/two-sum"
import { handleSearchInArray } from "@/app/utils/problems/SearchInArray"
import AnswerSuccesModal from "@/components/answerSuccessModal/answerSuccessModal"
import AnswerNotSuccesModal from "@/components/answerNotSucces/answerNotSuccess"
import { handleconvertRomanToInteger } from "@/app/utils/problems/ConverRomanToInteger"
// import useLocalStorage from "@/hooks/useLocalStorage";
// import Editor from '@monaco-editor/react';
interface codeEditorProps {
    problem: Problem;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    setSolved: React.Dispatch<React.SetStateAction<boolean>>;
    success: boolean,
    setNotSuccess:React.Dispatch<React.SetStateAction<boolean>>,
    notSuccess:boolean
}

export interface ISettings {
    // fontSize: string;
    settingsModalIsOpen: boolean;
    dropdownIsOpen: boolean;
}
export default function CodeEditor({ problem, setSuccess, setSolved, success,setNotSuccess,notSuccess }: codeEditorProps) {
    console.log("problem", problem)

    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
    let [userCode, setUserCode] = useState<string | undefined>(problem.starterCode);

    // const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");

    const [settings, setSettings] = useState<ISettings>({
        // fontSize: fontSize,
        settingsModalIsOpen: false,
        dropdownIsOpen: false,
    });

    const [user] = useAuthState(auth);
    // const {
    // 	query: { pid },
    // } = useRouter();
    const params = useParams();
    const { pid } = params;
    console.log("pid", pid)
    const handleSubmit = async () => {
        
        console.log("in handle submit")
        if (!user) {
            toast.error("Please login to submit your code", {
                position: "top-center",
                autoClose: 3000,
                theme: "dark",
            });
            return;
        }
        try {
            console.log("in try")
            userCode = userCode?.slice(userCode.indexOf(problem.starterFunctionName));
            console.log("user code", userCode)
            const cb = new Function(`return ${userCode}`)();
            const a = problems[pid as string]
            const handler = handleconvertRomanToInteger
            // [problems[pid as string].handlerFunction as (fn: any) => boolean] ;
            console.log("a", a)
            console.log("cb", cb);
            console.log("handler", handler)
            console.log(typeof handler === "function")
            console.log("pid", pid)
            // const alow =  handler(cb);

            if (typeof handler === "function" && typeof cb !== "undefined") {
                // @ts-ignore
                console.log("s se pehle")
                const success = handler(cb);
                console.log("s se baad")
                console.log("success", success)
                if (success) {
                   
                    toast.success("Congrats! All tests passed!", {
                        position: "bottom-center",
                        autoClose: 3000,
                        theme: "dark",
                    });
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 6000);

                    const userRef = doc(firestore, "users", user.uid);
                    await updateDoc(userRef, {
                        solvedProblems: arrayUnion(pid),
                    });
                    setSolved(true);
                }
                    
                
            }
        } catch (error: any) {
            setNotSuccess(true)
            setTimeout(() => {
                setNotSuccess(false);
            }, 6000);
            console.log(error.message);
            if (
                error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
            ) {
                toast.error("Oops! One or more test cases failed", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "dark",
                    
                });
            } else {
                alert("code error")
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "dark",
                });
            }
        }
        console.log("end handle submit")
    };

    useEffect(() => {
        const code = localStorage.getItem(`code-${pid}`);
        if (user) {
            setUserCode(code ? JSON.parse(code) : problem.starterCode);
        } else {
            setUserCode(problem.starterCode);
        }
    }, [pid, user, problem.starterCode]);

    const onChange = (value: string | undefined) => {
        console.log("im onchange")
        console.log("value", value)
        setUserCode(value);
        localStorage.setItem(`code-${pid}`, JSON.stringify(value));
    };

    return (
        <>
            <div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden '>
                <div className="absolute left-76 top-44 z-10" >
                    {success && <AnswerSuccesModal />}
                    {notSuccess && <AnswerNotSuccesModal/>}
                </div>
                <div className="absolute left-76 top-44 z-10" >
                    
                    {notSuccess && <AnswerNotSuccesModal/>}
                </div>
                <div className="my-2">
                    <CodeEditorNavbar settings={settings} setSettings={setSettings} />
                </div>
                <div className='w-full overflow-auto  bg-slate-600'>
                    <Editor className="bg-gray-400 my-2" value={userCode} onChange={onChange} height="50vh" defaultLanguage="javascript" />
                </div>
                <div className='w-full px-5 overflow-auto'>
                    {/* testcase heading */}
                    <div className='flex h-10 items-center space-x-6'>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-sm font-medium leading-5 text-white'>Testcases</div>
                            <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
                        </div>
                    </div>

                    <div className='flex'>
                        {problem.examples.map((example, index) => (
                            <div
                                className='mr-2 items-start mt-2 '
                                key={example.id}
                                onClick={() => setActiveTestCaseId(index)}
                            >
                                <div className='flex flex-wrap items-center gap-y-4'>
                                    <div
                                        className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
										${activeTestCaseId === index ? "text-black" : "text-gray-500"}
									`}
                                    >
                                        Case {index + 1}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='font-semibold my-4'>
                        <p className='text-sm font-medium mt-4 text-black'>Input:</p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-black border-transparent text-white mt-2'>
                            {problem.examples[activeTestCaseId].inputText}
                        </div>
                        <p className='text-sm font-medium mt-4 text-black'>Output:</p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-black border-transparent text-white mt-2'>
                            {problem.examples[activeTestCaseId].outputText}
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <EditorFooter handleSubmit={handleSubmit} />
                </div>
            </div>
        </>
    )
}













