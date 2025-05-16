import DisplayProducts from "./DisplayProducts"
import DisplayCart from "./DisplayCart"
import Products from "./Products"
import React from "react"

function ProductPage() {
    const [cart, setCart] = React.useState([])
    function handleCart(product, price) {
        setCart(prevCart => [...prevCart, {product: product, price: price}])
    }
    function removeFromCart(product) {
        setCart(prevCart => prevCart.filter(item => item.product !== product));
    }
    const products = Products.map((element, index) => <DisplayProducts key={index} {...element} addCart={handleCart} />)

    return (
        <div className="shop-container">
                <h1>Simple Shop</h1>
                <div className="products-section">
                    <h2>Products</h2>
                    <div className="product-list">      
                        {products}
                    </div>
                </div>
                <DisplayCart cart={cart} removeFromCart={removeFromCart}/>
        </div>
    )
}

export default ProductPage