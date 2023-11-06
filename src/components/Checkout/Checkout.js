import { useState } from "react"
import "./Checkout.css"
import { useCart } from "../../context/CartContext"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../config/Firebase"
import CheckoutForm  from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, getTotal, clearCart } = useCart()

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: parseFloat(getTotal),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, "Items")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
            
            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("Hay productos que estan fuera de stock")
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return (
            <section id="checkout">
                <div className="lds-dual-ring"></div>
            </section>
        )
    }

    if(orderId) {
        return (
            <section id="checkout">
                <h1>El id de tu orden es: {orderId}</h1>
            </section>
        )
    }

    return (
        <section id="checkout">
            <CheckoutForm onConfirm={createOrder} />
        </section>
    )
}

export default Checkout