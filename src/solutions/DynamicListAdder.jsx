import React from "react"

function ListAdder() {
    const [adder, setAdder] = React.useState([])

    function handleAdder(formData) {
        const newText = formData.get("newItem")
        setAdder(prevAdder => [...prevAdder, {text: newText, completed: false}])
    }
    
    function handleCompleted(index) {
        setAdder(prevAdder => 
            prevAdder.map((item, i) => 
                i === index ? {...item, completed: !item.completed} : item
            )
        )
    }
    
    const data = adder.map((element, index) => 
        <li key={index} className={element.completed ? "list-item checked" : "list-item"}>
            <span className={element.completed ? "item-text checked" : "item-text"}>{element.text}</span>
            <button className="check-button" onClick={() => handleCompleted(index)}>✓</button>
        </li>
    )
    console.log(data)
    return (
        <>
            <header>
                <h1>My Dynamic List Adder</h1>
            </header>
            <div className="list-container">
                <form action={handleAdder}>
                    <input type="text" name="newItem" placeholder="Add item" />
                    <button id="addItem">Add</button>
                </form>
                <ul id="list">
                    {data}
                </ul>
            </div>
        </>
    )
}

export default ListAdder