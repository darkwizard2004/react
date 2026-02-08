import { useState } from "react";

function Input(){
    const [input, setInput] = useState("");

    function handleInput(e){
        setInput(e.target.value)
    }

    return(
        <div>
            <input onChange = {()=>handleInput()} type="text" value = {input} />
        </div>
    )
}

export default Input;