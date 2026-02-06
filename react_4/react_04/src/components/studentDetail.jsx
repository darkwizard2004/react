function StudentDetail({student}) {
    let totalMarks = student.english + student.maths + student.computers;
    let grade = null;

    if(totalMarks >= 225) {
        grade = "Grade: A"
    }
    else if(totalMarks >= 180) {
        grade = "Grade: B"
    }
    else if(totalMarks >= 150) {
        grade = "Grade: C"
    }
    else {
        grade = "Grade: D"
    }

    return (
        <div>
            <h1>{student.name}</h1>
            <h2>{totalMarks}</h2>
            <h3>{grade}</h3>
        </div>
    )
}

export default StudentDetail;
