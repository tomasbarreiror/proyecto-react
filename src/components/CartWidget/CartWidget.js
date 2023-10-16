import { useContext } from 'react'
import carrito from './assets/carrito.svg'
import './CartWidget.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return (
        <Link to='/cart'>
            <img src={carrito} alt="cart-widget" className="carrito"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget;