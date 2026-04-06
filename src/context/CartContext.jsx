import { useState, useEffect, createContext, useContext } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('streetcore-cart') || '[]')
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('streetcore-cart', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product, size) => {
        setCartItems((prev) => {
            const key = `${product.id}-${size}`
            const existing = prev.find((i) => i.key === key)
            if (existing) {
                return prev.map((i) => i.key === key ? { ...i, qty: i.qty + 1 } : i)
            }
            return [...prev, { ...product, size, qty: 1, key }]
        })
    }

    const removeFromCart = (key) => {
        setCartItems((prev) => prev.filter((i) => i.key !== key))
    }

    const updateQty = (key, qty) => {
        if (qty < 1) return removeFromCart(key)
        setCartItems((prev) => prev.map((i) => i.key === key ? { ...i, qty } : i))
    }

    const clearCart = () => setCartItems([])

    const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0)
    const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
