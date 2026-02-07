// Class based components

// import React from 'react';

// export class Counter extends React.Component{
//     componentDidUpdate(prevProp,prevState){
//         if(this.props.count !== prevProp.count){
//             console.log("I am updated");
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>Count: {this.props.count}</h1>
//             </div>
//         )
//     }
// }


// Functional components
import {useState,useEffect} from 'react';

function Counter(){

    const [count,setCount] = useState(0);

    useEffect(()=>{
        if(count === 0){
            console.log("component did mount");
        }
        else if(count>0 && count <= 5){
            console.log("component did update");
        }
        else if(count>5){
            console.log("component will unmount"); 
        }
    },[count]);

    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {()=>{setCount(count+1)}}>Increase+</button>
        </div>
    )
}

export default Counter;