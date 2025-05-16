function DisplayProducts(props) {

    return (
            <div className="product-card">
                <h3>{props.product}</h3>
                <p>{props.price}</p>
                <button onClick={() => props.addCart(props.product, props.price)}>Add to Cart</button>
            </div>
    )
}

export default DisplayProducts