import React from "react"

function ControlledInput() {
    const [text, setText] = React.useState("")

    function handleText(event) {
        setText(event.target.value)
    }
    return (
        <div className="container">
            <input
                type="text"
                id="mirrorInput"
                placeholder="Type something..."
                onChange={handleText}
            />
            <p>You typed: <span id="mirrorOutput">{text}</span></p>
        </div>
    )
}

export default ControlledInput