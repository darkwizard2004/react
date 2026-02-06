import { useState } from "react";

function Inc_dec({count}) {
    const [counter, setCounter] = useState(count);

    function increasing(){
        setCounter(counter + 1);
    }
    function decreasing(){
        setCounter(counter - 1);
    }
    function timeincreasing(){
        setCounter(counter + 1);
    }
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick = {increasing}>Increment</button>
            <button onClick = {decreasing}>Decrement</button>
            <button onClick = {timeincreasing}>Increment * 3</button>
        </div>
    )
}

export default Inc_dec;