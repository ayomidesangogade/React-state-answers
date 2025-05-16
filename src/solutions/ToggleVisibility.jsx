import React from "react"

function Toggle() {
    const [visible, setVisible] = React.useState(false)

    function handleVisibility() {
        setVisible(preVisible => !preVisible)
    }
    return (
        <div className="container">
            <button id="toggle" onClick={handleVisibility}>Toggle</button>
            <p id="toggleText">{visible ? "This text is visible!" : ""}</p>
        </div>
    )
}

export default Toggle