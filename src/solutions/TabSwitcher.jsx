import React from "react"

function Switcher() {
    const heroes = ["Iron man", "Spiderman", "Superman", "Batman"]
    const villains = ["Thanos", "Ultron", "The Joker", "Loki"]

    const [tab, setTab] = React.useState("heroes")
    
    const data = tab === "heroes" ? heroes : villains
    const tabElements = data.map((element, index) => <li key={index}>{element}</li>)
    
    return (
        <div className="tab-container">
            <div className="tab-buttons">
                <button className={tab === "heroes" ? "tab-button active" : "tab-button"} onClick={() => setTab("heroes")}>Heroes</button>
                <button className={tab === "villains" ? "tab-button active" : "tab-button"} onClick={() => setTab("villains")}>Villains</button>
            </div>
            <ul id="tabList">
                {tabElements}
            </ul>
        </div>
    )
}

export default Switcher