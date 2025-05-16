import React from "react"

function Modal() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    function toggleModal() {
        setIsModalOpen(prevState => !prevState)
    }
    return (
        <div className="modal-demo">

            <button className="open-modal-btn" onClick={toggleModal}>Open Modal</button>

            <div className={isModalOpen ? "modal-overlay" : "hidden"}>
                <div className="modal-box">
                    <h2>Modal Title</h2>
                    <p>This is a sample modal window. Add anything you like here!</p>
                    <button className="close-modal-btn" onClick={toggleModal}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal