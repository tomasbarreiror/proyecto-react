import carrito from './assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img src={carrito} alt="cart-widget" className="carrito"/>
        </div>
    )
}

export default CartWidget;