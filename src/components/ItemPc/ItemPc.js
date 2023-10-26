const ItemPc = ({nombre, precio, img, selectOpcion}) => {

    return (
        <div className="product">
            <h2>{nombre}</h2>
            <img src={img} alt={nombre}/>
            <p>Precio: {precio} USD</p>
            <button onClick={() => selectOpcion}>Seleccionar</button>
        </div>
    )
}

export default ItemPc