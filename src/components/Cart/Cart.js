import { useCart } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, removeItem } = useCart()

    if (totalQuantity === 0) {
        return (
            <div className="cart-container">
                <h1 className="cart-text">El carrito se encuentra vacio</h1>
                <Link to='/' className="option">Ver productos</Link>
            </div>
        )
    }

    const calculateTotal = () => {
        let totalPrice = 0
        cart.forEach((prod) => {
            totalPrice += prod.precio * prod.quantity
        })
        return totalPrice
    }

    const total = calculateTotal()
    return (
        <div className="cart-container">
            {cart.map((prod) => (
                <CartItem key={prod.id} {...prod} removeItem={() => removeItem(prod.id)} />
            ))}
            <h3 className="cart-text">Total del carrito: ${total}</h3>
            <button onClick={() => clearCart()} className="clear-cart">Limpiar carrito</button>
            <Link to='/checkout' className="option">Confirma tu compra</Link>
        </div>
    )
}

export default Cart