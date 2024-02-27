 import Split from 'react-split'
import CodeEditor from './CodeEditor/CodeEditor';
import { useEffect } from 'react';
// import Split from 'split.js'
import ProblemDescription from './ProblemDescription/ProblemDescription'
import { Problem } from '@/app/utils/types/problem';
import { useState } from "react";
import { toast } from 'react-toastify';
import AnswerSuccesModal from '../answerSuccessModal/answerSuccessModal';
// import useWindowSize from "";
interface workspaceProps  {
    problem:Problem
}
export default function Workspace({problem}:workspaceProps) {
    // const { width, height } = useWindowSize();
	const [success, setSuccess] = useState(false);
	const [solved, setSolved] = useState(false);
    const [notSuccess,setNotSuccess] = useState(false)
    return(
        <>

{/* <Split> */}
{!success && <ProblemDescription problem={problem} _solved={solved}/>}

<div className='bg-dark-fill-2'>
<CodeEditor problem={problem} setSuccess={setSuccess} success={success} setSolved={setSolved} setNotSuccess={setNotSuccess} notSuccess={notSuccess}/>


</div>


    
    
    {/* </Split> */}
        </>
    )
}