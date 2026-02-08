import { memo,useCallback,useState } from "react";

function UseCallback(){
    const [count,setCount] = useState(0);
    // let a = 1; // ==> use memo
    // let a = function(){console.log("Hey")}
    let a = useCallback(function(){console.log("hey")},[]); // only one time rendering is done using useCallback function.
    return(

        <div>
            <Chotu prop = {a} />
            <button onClick = {()=>{setCount(count+1)}}>Count: {count}</button>
        </div>
    )
}

const Chotu = memo(function({prop}){
    return(
        <h1>Hello from - {prop()}</h1> // --> remember to use () while calling function as a prop.
    )
})

// function Chotu({prop}){
//     return(        // here the whole components will get rerender hence we should use memo.
//         <h1>Hello from - {prop} </h1>
//     )
// }

export default UseCallback