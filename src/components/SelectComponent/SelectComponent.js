import ItemPc from "../ItemPc/ItemPc"

const SelectComponment = ({ title, products, selectOption }) => {

    return (
        <div>
            <h3>{title}</h3>
            {products.map(prod => <ItemPc key={prod.id} {...prod} {...selectOption}/>)}
        </div>
    )
}

export default SelectComponment