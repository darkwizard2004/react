import {useState} from 'react';

function Jumper() {
    // task - is toincrement the value by 3 on every click .

    const [count,setCount] = useState(0);
    function incHandle() {

        setCount((count) => count + 1); // 0 + 1 = 1
        setCount((count) => count + 1); // 1 + 1 = 2
        setCount((count) => count + 1); // 2 + 1 = 3

        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // here it only increments by 1 because of the way react batches the state updates and optimizes the performance.

        // setCount(count + 2);
        // setCount(count + 1);
        // setCount(count + 1); --> more izzat therefore output for this case is 2.
    }


    return(
        <div>
            <h1>count: {count}</h1>
            <button onClick={incHandle}>Increase</button>
        </div>
    )
}

export default Jumper;