import React from "react"
import "../css/dynamic_object.css"

function DynamicObjectState() {
    const [field, setField] = React.useState({})

    function handleFields(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const key = formData.get("key")
        if (!key.trim()) return alert("Please enter a valid field name.")
        const value = formData.get("value")
        
        setField(prev => (
            {...prev, [key]:value}
        ))
        event.target.reset()
    }
    return (
        <div className="dynamic-form">
            <h2>Dynamic Fields</h2>
            <form onSubmit={handleFields}>
                <input
                    type="text"
                    name="key"
                    placeholder="Field Name (e.g. hobby)"
                    className="key-input"
                />
                <input
                    type="text"
                    name="value"
                    placeholder="Field Value (e.g. coding)"
                    className="value-input"
                />
                <button className="add-field">Add Field</button>
            </form>
            <h3>Current Object State:</h3>
            <pre className="output">{JSON.stringify(field, null, 2)}</pre>
        </div>
    )
}

export default DynamicObjectState