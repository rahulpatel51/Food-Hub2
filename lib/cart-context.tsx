"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Food, CartItem } from "./types"

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: Food) => void
  removeFromCart: (itemId: string) => void
  clearCart: () => void
  getItemQuantity: (itemId: string) => number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    // Load cart from localStorage
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (item: Food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id)

      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemId)

      if (existingItem && existingItem.quantity > 1) {
        // Decrease quantity if more than 1
        return prevItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item))
      } else {
        // Remove item if quantity is 1
        return prevItems.filter((item) => item.id !== itemId)
      }
    })
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getItemQuantity = (itemId: string) => {
    const item = cartItems.find((item) => item.id === itemId)
    return item ? item.quantity : 0
  }

  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price
    return total + itemPrice * item.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getItemQuantity,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

