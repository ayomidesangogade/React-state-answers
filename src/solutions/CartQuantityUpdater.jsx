import React from "react"
import "../css/cart.css"

function CartQuantityUpdater() {
    const [cart, setCart] = React.useState({ id: 1, name: "Phone", quantity: 2 })

    function handleQuantityIncrease() {
        setCart(prev => (
            {...prev, quantity: Math.min(100, Math.max(0, prev.quantity + 1))}
        ))
    }

    function handleQuantityDecrease() {
        setCart(prev => (
            {...prev, quantity: Math.min(100, Math.max(0, prev.quantity - 1 ))}
        ))
    }

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            <div className="cart-item">
                <p className="item-name">{cart.name}</p>
                <div className="quantity-controls">
                <button onClick={handleQuantityDecrease}>-</button>
                <span className="quantity">{cart.quantity}</span>
                <button onClick={handleQuantityIncrease}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartQuantityUpdater