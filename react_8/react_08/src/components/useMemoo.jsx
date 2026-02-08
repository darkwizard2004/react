import { useMemo, useState } from "react";

function UseMemoo(){
    const[count,setCount] = useState(0);
    const[input,setInput] = useState(0);


    // function handleInc(){
    //     setCount(count+1);
    // }

    function handleInput(e){
        setInput(e.target.value)
    }
let memoCount = useMemo(()=>{
    let sum = 0;
    for(let i = 1; i<=input;i++){
        console.log("loop run")
        sum += i;
    }
    return sum;
},[input]);

// let sum = 0;
//     for(let i = 1; i<=input;i++){
//         console.log("loop run")
//         sum += i;
//     }
// if we do not use useMemo for this then on executing any statement whole function will rerender again and again.
    

    return(
        <div>
            {/* <button onClick = {handleInc}>Increase: {count}</button> */}
            <button onClick = {()=>setCount(count+1)} > Increase: {count}</button>
            <h1>
                SUM: {memoCount};
            </h1>
            <input type="number" onChange = {handleInput} />
        </div>
    )
}

export default UseMemoo;