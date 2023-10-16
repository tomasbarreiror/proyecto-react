import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id, nombre, precio, img}) => {

    return (
        <div className="product">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>
            <p>Precio: {precio} USD</p>
            <Link to={`/productos/${id}`} className="details">Ver detalle</Link>
        </div>
    )
}

export default Item
