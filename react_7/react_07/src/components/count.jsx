import { useEffect, useState } from "react";

function Count(){

    const [time,setTime] = useState(0);

    useEffect(()=>{              // useEffect is a callback function which runs after the component is rendered. It can be used to perform side effects in function components, such as fetching data, setting up subscriptions, or manually changing the DOM.
        const interval = setInterval(()=>{   // we save the result of this function in a variable to further use in a cleanup function in order to destroy it.
            // setTime(prevTime => prevTime+1);
            setTime(time+1);
        },1000);
// problem - due to this method. there can be serveral counter/timer/clock will be created after every second and previous clock also doing its work.
// but our system can only hold upto 20-25 or little more clock at a time, so after 20-25 seconds, our system will be overloaded and it will crash.
//  to avoid this problem, we can use clearInterval method to clear/destroy the previous clock before creating a new one.
// and this clearInterval is a cleanup function which is returned by the useEffect callback function. It will be called before the next useEffect callback function is called, so it will clear the previous clock before creating a new one.
// and this cleanup happens between rerendering of the component.
// cleanup function:- whatever function i return from useEffect, that function will be called as a cleanup function. It will be called before the next useEffect callback function is called, so it will clear the previous clock before creating a new one. and this cleanup happens between rerendering of the component.

    return () => clearInterval(interval);
    },[time]); //samarth bhaiya method
// },[]); use for setTime(prevTime => prevTime+1);  chatGPT method


    return(
        <div><h1>Hello</h1>
            <h1>Timer: {time}</h1>
        </div>
    )
}

export default Count;