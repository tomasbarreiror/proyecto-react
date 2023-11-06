import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../config/Firebase";

export const CartContext = createContext({ cart: [], totalQuantity: 0 })

export const useCart = () => {
    return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const { user } = useAuth()

    const loadCartFromFirestore = async () => {
        if (user && user.uid) {
            try {
                const userId = user.uid;
                const cartDocRef = doc(db, "users", userId);
                onSnapshot(cartDocRef, (doc) => {
                    if (doc.exists()) {
                        const cartData = doc.data().cart;
                        setCart(cartData)
                    } else {
                        setCart([])
                    }
                })
            } catch (error) {
                console.error(error)
            }
        }
    }

    useEffect(() => {
        if (user) {
            loadCartFromFirestore();
        }
    }, [user])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }])
            setTotalQuantity((total) => total + quantity)
            updateCartInFirestore()
        } else {
            console.error("El producto ya se encuentra agregado")
        }
    }

    const removeItem = (itemId) => {
        const removedProduct = cart.find((prod) => prod.id === itemId);
        if (removedProduct) {
            setTotalQuantity((total) => total - removedProduct.quantity);
        }
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
        updateCartInFirestore()
    };

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0)
        updateCartInFirestore()
    }

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId)
    }

    const getTotal = () => {
        const total = cart.reduce((acc, item) => {
            return acc + item.precio * item.quantity
        }, 0)

        return total;
    }

    const updateCartInFirestore = async () => {
        if (user) {
            try {
                const userId = user.uid
                const cartRef = doc(db, "users", userId)
                await setDoc(cartRef, { cart }, { merge: true })
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addItem,
                removeItem,
                clearCart,
                totalQuantity,
                getTotal,
                updateCartInFirestore,
                loadCartFromFirestore,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}