function Propss({naam,age,isMale}) {  // destructuring props object.
    return(
        <div>
            <h1>{naam}</h1>
            <h1>{age}</h1>
            <h1>{JSON.stringify(isMale)}</h1>
        </div>
    );
}


// function Propss(props) {//props is an object. and name in argument can be anything.
//     console.log(props, "props");
//     return(
//         <div>
//             <h1>{props.name}</h1>
//             <h1>{props.age}</h1>
//             <h1>{JSON.stringify(props.isMale)}</h1>
//             {/* <h1>{isMale ? "Male" : "Female"}</h1> */}
//         </div>
//     );
// }

export default Propss;