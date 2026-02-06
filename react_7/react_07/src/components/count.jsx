import { useEffect, useState } from "react";

function Count(){

    const [time,setTime] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            // setTime(prevTime => prevTime+1);
            setTime(time+1);
        },1000);

        return() => clearInterval(interval);
    },[time]); //samarth bhaiya method
// },[]); use for setTime(prevTime => prevTime+1);  chatGPT method


    return(
        <div><h1>Hello</h1>
            <h1>Timer: {time}</h1>
        </div>
    )
}

export default Count;