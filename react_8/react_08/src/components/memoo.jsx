import { memo, useState } from "react";

function Memoo({user}){

    const [person,setPerson] = useState(user);
    function handleName(){
        setPerson(Math.floor(Math.random()*10));
    }

    return(
        <div>
            <Chotu naam = {person} />
            <button onClick = {handleName}>Change Name</button>
            <Chotu naam = "jai" />
            <Chotu naam = "keshu" />
            <Chotu naam = "mohit" />
        </div>
    )
    //when the props are same and the component is being rerendered,
    //then Memoo function will help you to stop the rerendering.
}
export default Memoo;

let Chotu = memo(function ({naam}){
    return(
        <div>
            <h1>Name:{naam}</h1>
        </div>
    )
})

