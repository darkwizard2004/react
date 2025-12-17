function Events() {
    function handlePush1(x,y) {console.log("balle 1",x,y);}
    function handlePush2() {console.log("balle 2");}

    return (
        <div>
            <button onClick={()=>handlePush1(10,20)}>push1!</button>
            <button onClick={handlePush2}>push2!</button>
        </div>
    )
}




// function Events() {
//     function handleClick1() {console.log("click 1")}
//     function handleClick2() {console.log("click 2")}
//     return(
//         <div>
//             <button onClick={handleClick1}> click me 1!</button>
//             <h1 onClick={handleClick2}> click me 2!</h1>
//         </div>
//     )
// }

export default Events;