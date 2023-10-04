import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id, nombre, precio, stock, img, categoria}) => {

    return (
        <div className="card">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>
            <p>Stock: {stock}</p>
            <p>Precio: {precio} USD</p>
            <Link to={`/productos/${id}`} className="option">Ver detalle</Link>
        </div>
    )
}

export default Item
