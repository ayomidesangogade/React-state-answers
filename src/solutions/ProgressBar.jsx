import React from 'react';

function Progress() {
    const [progress, setProgress] = React.useState(0)

    function decrement() {
        setProgress(prevProgress => Math.min(100, Math.max(0, prevProgress - 10)))
    }

    function increment() {
        setProgress(prevProgress => Math.min(100, Math.max(0, prevProgress + 10)))
    }
    return (
            <div className="container">
                <div className="bar-wrapper">
                    <div className="bar" style={{width: `${progress}%`}}></div>
                </div>
                <p><span id="progressValue">{progress}</span>%</p>
                <button onClick={decrement}>-10</button>
                <button onClick={increment}>+10</button>
            </div>
    )
}

export default Progress;