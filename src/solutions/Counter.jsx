import React from "react"

function Counter() {
    const [count, setCount] = React.useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div className="container">
            <h2>Counter: <span id="count">{count}</span></h2>
            <button id="increment" onClick={increment}>Click Me</button>
        </div>
    )
}

export default Counter