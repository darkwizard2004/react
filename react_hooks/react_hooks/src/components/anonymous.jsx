import {useState} from 'react';

function Anonymous({name}) {
    const [currentName, setCurrentName] = useState(name);

    function handleName() {
        setCurrentName("anonymous");
    }


    return (
        <div>
            <h1>{currentName}</h1>
            <button onClick = {handleName}>Logout</button>
        </div>
    )
}









// NOT THE CORRECT APPROACH:
// function Anonymous({name}) {
//     function handleName() {
//         console.log(name,"before Logout");
//         name = "anonymous";
//         console.log(name,"after Logout");
//     }
//     return (
//         <div>
//             <h1>{name}</h1>
//             <button onClick = {handleName}>Logout</button>
//         </div>
//     )
// }
export default Anonymous;