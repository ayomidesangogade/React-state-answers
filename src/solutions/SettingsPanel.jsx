import React from "react"
import "../css/settings.css"

function SettingsPanel() {
    const [settings, setSettings] = React.useState({darkMode: false, notifications: false, autoSave: false})

    function handleToggle(key) {
        setSettings(prevSettings => { return (
            {...prevSettings, [key] : !prevSettings[key]}
        )})
    }
    return (
        <div className={`settings-panel ${settings.darkMode ? "dark" : ""}`}>
            <h2>Settings</h2>

            <div className="setting-item">
                <label htmlFor="darkMode">Dark Mode</label>
                <input
                type="checkbox"
                id="darkMode"
                checked={settings.darkMode}
                onChange={() => handleToggle("darkMode")}
                />
            </div>

            <div className="setting-item">
                <label htmlFor="notifications">Notifications</label>
                <input
                type="checkbox"
                id="notifications"
                checked={settings.notifications}
                onChange={() => handleToggle("notifications")}
                />
            </div>

            <div className="setting-item">
                <label htmlFor="autoSave">Auto Save</label>
                <input
                type="checkbox"
                id="autoSave"
                checked={settings.autoSave}
                onChange={() => handleToggle("autoSave")}
                />
            </div>

            <pre className="settings-output">
                {JSON.stringify(settings, null, 2)}
            </pre>
        </div>
    )
}

export default SettingsPanel