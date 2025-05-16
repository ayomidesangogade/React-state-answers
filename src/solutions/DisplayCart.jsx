function DisplayCart({cart, removeFromCart}) {
    const total = cart.reduce((sum, item) => sum + Number(item.price.slice(1)), 0)
    const cartElements = cart.map((element, index) => 
    <li key={index}>
        <span className="item-name">{element.product}</span>
        <span className="item-actions">{element.price}
            <button className="remove-btn" onClick={() => removeFromCart(element.product)}>Remove</button>
        </span>
    </li>)

    return (
            <div className="cart-section">
                <h2>Your Cart</h2>
                <ul className="cart-list">
                    {cartElements}
                </ul>
                <div className="total-section">
                    <strong>Total:</strong> ₦{total}
                </div>
            </div>
    )
}
export default DisplayCart