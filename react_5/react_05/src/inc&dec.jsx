import {useState} from "react";

function Increment() {
    const [count,setCount] = useState(0);
    function handleInc(){
        setCount(count+1);
    }
    function handleDec(){
        setCount(count-1);
    }
    return(
        <div>
            <h1>Conter-{count}</h1>
            <button onClick={handleInc}>Inc +</button>
            <button onClick={handleDec}>Dec +</button>
        </div>
    )
}

export default Increment;