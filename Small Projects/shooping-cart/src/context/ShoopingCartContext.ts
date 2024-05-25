import { createContext, ReactNode, useContext, useState } from "react"
// import { ShoppingCart } from "../components/ShoppingCart"
// import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  

  return (
    <ShoppingCartContext.Provider
      value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}