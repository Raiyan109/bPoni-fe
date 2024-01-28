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

    const getTotal = () => {
        let total = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = Data.find((d) => d.id === item)
                total += cartItems[item] * itemInfo?.price
            }
        }
        return total
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const value = {
        cartItems, setCartItems, addToCart, removeFromCart, getTotal
    }

    console.log(cartItems);
    return (
        <ITEM_PROVIDER.Provider value={value}>
            {children}
        </ITEM_PROVIDER.Provider>
    )
}

export default ItemContext