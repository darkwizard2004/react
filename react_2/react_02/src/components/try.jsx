

function Try() {
// world-1
    let abc = 10;
    let x = "manan";
    let y = "garg";
    let u = true;
    let v = false;
    let w = null;
    let z = "undefined";
    // console.log("Try component rendered");

    // world-2
    return(
        <div>
            <h2>This is try component</h2>
            <h2>abc = {abc}</h2>
            <h1>X: {x} </h1>
            <h1>Y: {y} </h1>
            <h1>U: {JSON.stringify(u)} </h1>            
            <h1>V: {JSON.stringify(v)} </h1>
            <h1>W: {JSON.stringify(w)} </h1>
            {/* <h1>Z: {JSON.stringify(z)} </h1> */}
            <h1>Z: {z} </h1>
        </div>
    )
}

export default Try;