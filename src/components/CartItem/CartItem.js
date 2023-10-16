import './CartItem.css'

const CartItem = ({ nombre, img, precio, quantity, removeItem }) => {

    return (
        <div className='cart-product'>
            <div>
                <h2>{nombre}</h2>
                <img src={`${process.env.PUBLIC_URL}/${img}`} alt={nombre}/>
            </div>
            <div>
                <p>Cantidad: {quantity}</p>
                <p>Precio: {precio * quantity} USD</p>
            </div>
            <button className="cart-remove" onClick={removeItem}>X</button>
        </div>
    )
}

export default CartItem