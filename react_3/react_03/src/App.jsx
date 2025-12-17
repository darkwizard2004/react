// import Apple from "./components/Apple"

import EmployeeCard from "./components/employeeCard"

// import Lucky from "./components/Lucky"
// import Events from "./components/Events"
// import Propss from "./components/props"
import Stationary from "./components/stationary"
const items = ["pen","pencil","eraser", "eraser"];

function App() {
  return (
    <div>
      <h1>Hello Vite + React!</h1>
      {/* <Apple /> */}
      {/* <Lucky /> */}
      {/* <Events /> */}
      {/* <Propss age = {20} name = "Manan" isMale = {true} /> */}
      {/* <EmployeeCard employee = {{name: "Manan", designation: "Web Developer", workExperience: "5 months"}} /> */}
      {/* <EmployeeCard name = "Manan" designation = "Web Developer" workExperience = {1}/> */}
      <Stationary items = {items}/>
    </div>
  )
}

export default App