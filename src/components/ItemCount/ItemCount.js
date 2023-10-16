import './ItemCount.css'
import {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    function handleClickSuma(){
        if(count < stock) {
            setCount(count + 1)
        }
    }

    function handleClickResta(){
        if(count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div className="item-count">
            <button onClick={handleClickResta}>-</button>
            <p>{count}</p>
            <button onClick={handleClickSuma}>+</button>
            <button onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount