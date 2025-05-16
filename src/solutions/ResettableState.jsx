import React from "react"

function Resettable({initial = 5}) {
    const [count, setCount] = React.useState(initial)

    function Counter() {
        setCount(prevCount => prevCount + 1)
    }
    function handleReset() {
        setCount(initial)
    }
    return (
            <div className="container">
                <h3>Count: <span id="resettableCount">{count}</span></h3>
                <button onClick={Counter}>Increment</button>
                <button onClick={handleReset}>Reset</button>
            </div>
    )
}

export default Resettable