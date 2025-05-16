import React from "react"
import "../css/profile_editor.css"

function Editor() {
    const [profile, setProfile] = React.useState({ name: "", age: "", location: "" })

    function handleChange(event) {
        const {name, value} = event.target
        setProfile(prevProfile => (
            {...prevProfile, [name]:value}
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        alert("Profile Saved!")
    }
    return (
        <div className="form-container">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    value={profile.name}
                />
                <label htmlFor="age">Age: </label>
                <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={profile.age}
                    onChange={handleChange}
                />
                <label htmlFor="location">Location: </label>
                <input
                    type="text"
                    name="location"
                    placeholder="Enter your location"
                    onChange={handleChange}
                    value={profile.location}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Editor