function EmployeeCard({name,designation,workExperience }) {
    return (
        <div> 
            <h2>Name: {name}</h2>
            <h2 style = {{color: "green"}}>Designation: {designation}</h2>
            <h2 style = {{color: "blue"}}>Work Experience: {workExperience}</h2>
        </div>
    )
}

export default EmployeeCard;