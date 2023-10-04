import {useState} from "react";

function ItemCount({stock, initial, onAdd}){
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
        <div className="box">
            <div className="columns">
                <div className="column">
                    <button onClick={handleClickResta}>-</button>
                </div>
                <div className="column">
                    <p>{count}</p>
                </div>
                <div className="column">
                    <button onClick={handleClickSuma}>+</button>
                </div>
                <div className="column">
                    <button onClick={() => onAdd(count)} disabled={!stock}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount