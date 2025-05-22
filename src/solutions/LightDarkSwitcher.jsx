import React from "react"
import "../theme.css"

function ThemeSwitcher() {
    const [theme, setTheme] = React.useState("light")
    
    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light"
        document.body.classList.remove("light", "dark");
        document.body.classList.add(newTheme);
        setTheme(newTheme)    
    }
    return (
        <>
            <div className="theme-switcher">
                <button id="themeToggle" onClick={toggleTheme}>
                    <span className={theme === "light" ? "sun" : "icon"}>☀️</span>
                    <span className={theme === "dark" ? "moon" : "icon"}>🌙</span>
                </button>
            </div>

            <div className="page-content">
                <h1 className={theme === "light" ? "" : "dark"}>Welcome to My Themed Page</h1>
                <p>This is a paragraph that responds to light and dark themes.</p>
            </div>
        </>
    )
}

export default ThemeSwitcher