
import { useEffect, useRef } from "react";
function Reff(){

    let salary = 200000;
    let spanEl = useRef();

    useEffect(()=>{
        setTimeout(()=>{
            // console.log(spanEl,"spanEl"); //sapnEl will give the object with current
            // console.log(spanEl.current,"spanEl");  // here we get the value of span element.
            //now we apply the important part of salary : 200000 to 200.
            console.log(spanEl.current.innerHTML = "200","spanEl");
        },3000)
    }, [])
    return(
        <div>
            <h1>Salary is: <span ref = {spanEl}> {salary} </span></h1>
        </div>
    )
}

export default Reff;



// import { useEffect } from "react";
// function Reff(){

//     let salary = 200000;

//     useEffect(()=>{
//         setTimeout(()=>{
//             document.getElementById('salar').innerHTML = "200" //DOM - but we will not use it as it affects the virtual DOM.
//         // hence we dont do this dom manipulation.
//         }, 3000)
//     }, [])
//     return(
//         <div>
//             <h1>Salary is: <span id="salar"> {salary} </span></h1>
//         </div>
//     )
// }

// export default Reff;