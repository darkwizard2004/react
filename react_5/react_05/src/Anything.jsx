import { useState } from "react";

// function Anything({naam}) {
//     return(
//         <div>Name: {naam}</div>
//         <button onClick={handleFunction}></button>
//     )
// }


function Anything({naam}) {
    const [userName,setUsername] = useState(naam);
    function handleName() {
        setUsername("Anonymous");
    }
    return(
        <div>
            <h1>Name: {userName}</h1>
            <button onClick = {handleName}>Logout</button>
        </div>
    )
}

export default Anything;