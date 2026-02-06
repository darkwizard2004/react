
import { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';
// in axios we get the entire data at once.


function APIcalling() {
    const [todos,setTodos] = useState([]);
    const API = "https://jsonplaceholder.typicode.com/todos";
    useEffect(()=>{
        axios.get(API)
        .then((resp)=>{setTodos(resp.data)}) //response
        .catch((error)=>{console.log(error)})
    },[])
    return(
        <div>
            <h1>API Calling Component</h1>
            {todos.map((todo) => {
                return(
                    <div key={todo.id}>
                        <h2>{todo.title} - {todo.id}</h2>
                    </div>
                )
            })}
        </div>
    )
}
export default APIcalling;

// function APIcalling() {
//     const [todos,setTodos] = useState([]);
//     const API = "https://jsonplaceholder.typicode.com/todos";
//     useEffect(()=>{
//         async function apiCall(){
//             let resp = await axios.get(API);
//             // console.log(resp.data);
//             setTodos(resp.data);
//         }
//         apiCall();
//     },[])
//     return(
//         <div>
//             <h1>API Calling Component</h1>
//             {todos.map((todo) => {
//                 return(
//                     <div key={todo.id}>
//                         <h2>{todo.title} - {todo.id}</h2>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
// export default APIcalling;

// function APIcalling() {
//     const [todos,setTodos] = useState([]);
//     const API = "https://jsonplaceholder.typicode.com/todos";
//     useEffect(()=>{
//         async function apiCall(){
//             let resp = await fetch(API);
//             let data = await resp.json();
//             setTodos(data);
//         }
//         apiCall();
//     },[])
//     return(
//         <div>
//             <h1>API Calling Component</h1>
//             {todos.map((todo) => {
//                 return(
//                     <div key={todo.id}>
//                         <h2>{todo.title} - {todo.id}</h2>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
// export default APIcalling;

// import { useEffect } from 'react';
// import {useState} from 'react';

// function APIcalling() {
//     const [todos,setTodos] = useState([]);
//     const API = "https://jsonplaceholder.typicode.com/todos";
//     useEffect(()=>{
//         fetch(API)
//         .then((data)=>{return data.json()})
//         .then((resp)=>{setTodos(resp)}) //response
//         .catch((error)=>{console.log(error)})
//     },[])
//     return(
//         <div>
//             <h1>API Calling Component</h1>
//             {todos.map((todo) => {
//                 return(
//                     <div key={todo.id}>
//                         <h2>{todo.title} - {todo.id}</h2>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
// export default APIcalling;