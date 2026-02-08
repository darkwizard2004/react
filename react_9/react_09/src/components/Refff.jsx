import { useRef, useState } from "react";

function Refff(){
    const [count,setCount] = useState(0);

    const countRef = useRef(0);
    // console.log(countRef.current,  "countRef");
    function handleRef(){
        countRef.current++
    }

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Inc - {count}</button>
            <br /><br />
            <button onClick={handleRef} >Inc ref - {countRef.current}</button>
        </div>
    )
}

// we can observe in this code that on clicking the Inc ref button several times it still do not show any effect on ui.
// only when we click on the Increase button, the ui of Inc ref change.
// so this indicated that useRef is mantainig the state between 2 renders.
// and do not display it till the next rendering.

export default Refff;