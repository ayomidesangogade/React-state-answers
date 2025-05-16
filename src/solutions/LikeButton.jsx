import React from "react"

function Reaction() {
    const [reaction, setReaction] = React.useState(false)
    function handleLike() {
        setReaction(prevReaction => !prevReaction)
    }
    return (
        <div className="container">
            <button className={reaction ? "liked" : "unliked"} onClick={handleLike}>{reaction ? "Liked" : "Unliked"}</button>
        </div>
    )
}

export default Reaction