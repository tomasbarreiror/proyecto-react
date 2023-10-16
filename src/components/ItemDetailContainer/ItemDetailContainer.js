import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { db } from "../../config/Firebase";
import { doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'Items', itemId)

        getDoc(docRef)
        .then(resp => {
            const data= resp.data()
            const productAdapted = { id: resp.id, ...data }
            setProduct(productAdapted)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])

    return (
        <div className="item-detail-container">
            {loading ? (
                <div className="lds-dual-ring"></div>
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    )
}

export default ItemDetailContainer