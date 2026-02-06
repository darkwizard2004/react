function Increment() {
    return(
        <div>
            <h1>Conter-{count}</h1>
            <button onClick={handleInc}>Inc +</button>
            <button onClick={handleDec}>Dec +</button>
        </div>
    )
}

export default Increment;