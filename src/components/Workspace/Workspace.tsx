 import Split from 'react-split'
import CodeEditor from './CodeEditor/CodeEditor';
import { useEffect } from 'react';
// import Split from 'split.js'
import ProblemDescription from './ProblemDescription/ProblemDescription'
import { Problem } from '@/app/utils/types/problem';

interface workspaceProps  {
    problem:Problem
}
export default function Workspace({problem}:workspaceProps) {
    
    return(
        <>

{/* <Split> */}
<ProblemDescription problem={problem}/>

<CodeEditor></CodeEditor>
    
    
    {/* </Split> */}
        </>
    )
}