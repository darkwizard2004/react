// function Lucky() {
//     let RN = Math.floor(Math.random() * 10);
//     return(
//         <div>
//             <h1>{RN}</h1>
//             {RN ===7 ? <h1>Winner</h1> : <h1>Loser</h1>}
//         </div>
//     )
// }

//use ternary operator to make it more concise.

// function Lucky() {
//     let RN = Math.floor(Math.random()*10);
//     let el = null;
//     if(RN === 7){
//         el = "winner";
//     }
//     else{
//         el = "loser";
//     }
//     return(
//         <div>
//             <h1>{RN}</h1>
//             <h1>{el}</h1>
//         </div>
        
//     )
// }

// export default Lucky;