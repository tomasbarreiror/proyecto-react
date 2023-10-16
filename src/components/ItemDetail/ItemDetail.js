import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'
import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, stock, img, categoria}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio, img
        }

        addItem(item, quantity)
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