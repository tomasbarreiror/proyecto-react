import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/Firebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
    
        const collectionRef = categoryId
            ? query(collection(db, 'Items'), where('categoria', '==', categoryId))
            : collection(db, 'Items')
    
            getDocs(collectionRef)
            .then(resp => {
                const productsAdapted = resp.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="item-list-container">
            {loading ? (
                <div className="lds-dual-ring"></div>
                ) : (
                <ItemList products={products}/>
            )}
        </div>
    )
}

export default ItemListContainer;