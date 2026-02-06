import { useState } from "react";

function Jumper() {
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleJump}>Jump</button>
        </div>
    )
}