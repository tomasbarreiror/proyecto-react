import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../../context/CartContext'
import { useAuth } from "../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import ItemCount from "../ItemCount/ItemCount";
import { db } from "../../config/Firebase";
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, stock, img, categoria}) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem, cart } = useCart()
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio, img
        }

        if (user) {
            const updatedCart = [...cart]
            saveCartToUser(updatedCart).then(() => {
                addItem(item, quantity)
            })
        } else {
            navigate('/login')
        }
    }

    const saveCartToUser = async (cartData) => {
        const userId = user.uid
        const cartRef = doc(db, "users", userId)
        try {
            await setDoc(cartRef, { cart: cartData }, { merge: true })
        } catch(error) {
            console.error("Error al guardar el carrito:", error)
            throw error
        }
    }

    return (
        <div className="item-detail">
            <div className="grid1">
                <h2>{nombre}</h2>
                <img src={`${process.env.PUBLIC_URL}/${img}`} alt={nombre}/>
            </div>
            <div className="grid2">
                <p>Stock: {stock}</p>
                <p>Precio: {precio} USD</p>
                <p>Categoria: {categoria}</p>
            </div>
            <div className="grid3">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="checkout">Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd}/>
                    )
                }
            </div>

        </div>
    )
}

export default ItemDetail