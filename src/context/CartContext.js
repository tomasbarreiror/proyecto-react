import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [], totalQuantity: 0 })

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
            setTotalQuantity((total) => total + quantity)
        } else {
            console.error("El producto ya se encuentra agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        const removedProduct = cart.find((prod) => prod.id === itemId)
        if (removedProduct) {
            setTotalQuantity((total) => total = removedProduct.quantity)
        }
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}