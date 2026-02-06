import React from "react";
import { useState } from "react";


function Person() {
    const[count,setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={handleClick}>Inc +</button>
        </div>
    )

}

export default Person;