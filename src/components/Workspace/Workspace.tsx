 import Split from 'react-split'
import CodeEditor from './CodeEditor/CodeEditor';
import { useEffect } from 'react';
// import Split from 'split.js'
import ProblemDescription from './ProblemDescription/ProblemDescription'
export default function Workspace(){
    
    return(
        <>

{/* <Split> */}
<ProblemDescription />

<CodeEditor></CodeEditor>
    
    
    {/* </Split> */}
        </>
    )
}