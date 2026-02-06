import APIcalling from "../../../react_6/react_06/src/components/APIcalling";
import Anonymous from "./components/anonymous";
import Inc_dec from "./components/IncDec";
import Jumper from "./components/jumper";


function App() {
  return(
    <div>
      <h1>React</h1>
      {/* <Anonymous name = "manan garg" /> */}
      {/* <Inc_dec count = {0} /> */}
      {/* <Jumper /> */}
      <APIcalling />
    </div>
  )
}

// after running it runs on the console but changes are not visble on ui screen.
// hence problem is ui is not reflecting the anonymous name.
// react ui will not rerender like this because of variable.
// to react to rerender => use hooks => useState();

// useState mentality:
// and after using useState() whenever there is a change in state the component rerenders(recreates) and hence show the new value.

export default App;