import React from 'react';
// import { Counter } from './component/counter';
import Counter from './component/counter';
// class based component:

// while establishing class based component, we need to import React and Component from react library. Then we need to create a class and extend it with Component. Then we need to create a render method which will return the JSX code.
class App extends React.Component {

  constructor() {
    super();
    this.state = {               // this is how we create state in class based component.
      count: 0
    }
  }

    decrease(){
      this.setState({count: this.state.count-1});
    }

    componentDidMount(){
      console.log("hello");
    }

    componentWillUnmount(){
      console.log("I am deleted");
    }


  render() {
    return(
      <div>
        <h1>Hello Class</h1>
        <button onClick = { ()=>this.setState({count:this.state.count+1})}>Increase</button>
        <h1>count: {this.state.count}</h1>
        <Counter count = {this.state.count}/>
        <button onClick = {this.decrease.bind(this)}>Decrease</button>
      </div>
    )
  }
}


// function component:

// function App() {
//   return(
//     <div>
//       <h1>Hello!</h1>
//     </div>
//   )
// }

export default App;