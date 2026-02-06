function EmployeeCard({employee: {name,designation,workExperience }}) { // order of destructing not matter

    // function EmployeeCard({employee}) {  // 2nd way to write above scentence.
    //const {name,designation,workExperience} = employee; // destructuring employee object.   
    
    return (
        <div> 
            <h2>Name: {name}</h2>
            <h2 style = {{color: "green"}}>Designation: {designation}</h2>
            <h2 style = {{color: "blue"}}>Work Experience: {workExperience}</h2>
        </div>
    )
}

export default EmployeeCard;