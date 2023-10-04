import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({id, nombre, precio, stock, img, categoria}) => {

    return (
        <div id={id}>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>
            <p>Stock: {stock}</p>
            <p>Precio: {precio} USD</p>
            <p>Categoria: {categoria}</p>
            <ItemCount stock={stock} initial={1} onAdd={(count) => console.log('Cantidad agregada: ',count)}/>
        </div>
    )
}

export default ItemDetail