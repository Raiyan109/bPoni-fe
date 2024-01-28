import { createContext, useState } from "react";
import Data from '../../public/data.json'

export const ITEM_PROVIDER = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < Data.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const ItemContext = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const value = {
        cartItems, setCartItems, addToCart, removeFromCart
    }

    console.log(cartItems);
    return (
        <ITEM_PROVIDER.Provider value={value}>
            {children}
        </ITEM_PROVIDER.Provider>
    )
}

export default ItemContext