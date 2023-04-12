import React, { createContext, useContext, useState } from 'react'

// TODO: Move as much state as possible to this context file

// CONTEXT
const StateContext = createContext({
  showCart: false as boolean,
  setShowCart: (showCart: boolean) => {},
  showHamburgerMenu: false as boolean,
  setShowHamburgerMenu: (showHamburgerMenu: boolean) => {},
  cartItems: [] as any[],
  setCartItems: (cartItems: any[]) => {},
  totalPrice: 0 as number,
  setTotalPrice: (totalPrice: number) => {},
  totalQuantities: 0 as number,
  setTotalQuantities: (totalQuantities: number) => {},
  qty: 1 as number,
  setQty: (qty: number) => {},
  incQty: () => {},
  decQty: () => {},
  onAdd: (product: any, quantity: number) => {},
  toggleCartItemQuantity: (id: string, value: string) => {},
  removeCartItem: (id: string) => {},
})

// PROVIDER
export function StateContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [showCart, setShowCart] = useState(false)
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  // When the user adds a product to the cart
  const onAdd = (product: any, quantity: number) => {
    // Find the item in the cart
    const checkProductInCart = cartItems.find(
      // Check if the item's _id is the same as the product's _id
      (item: any) => item._id === product._id
    )

    // Update the total price and total quantity of the cart
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    // If the product is already in the cart
    if (checkProductInCart) {
      // Find the product in the cart and increase the quantity.
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          }
      })

      // Replace the cart items with the updated cart items.
      setCartItems(updatedCartItems as any)
    } else {
      // The product is not in the cart
      // Add the product to the cart with the quantity. (quantity was passed as a parameter)
      product.quantity = quantity

      // Add the product to the cart items.
      setCartItems([...cartItems, { ...product }])
    }

    // TODO: Add a toast notification
    // toast.success(`${qty} ${product.name} added to cart`)
  }

  const toggleCartItemQuantity = (id: any, value: any) => {
    const index = cartItems.findIndex((product) => product._id === id)
    const newCartItems = [...cartItems] // create a new array to avoid mutating the original cartItems array

    if (value === 'inc') {
      const foundProduct = {
        ...newCartItems[index],
        quantity: newCartItems[index].quantity + 1,
      } // increase the quantity value by 1
      newCartItems.splice(index, 1, foundProduct) // replace the item at the same index
      setCartItems(newCartItems)
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
    } else if (value === 'dec') {
      if (newCartItems[index].quantity > 1) {
        const foundProduct = {
          ...newCartItems[index],
          quantity: newCartItems[index].quantity - 1,
        }
        newCartItems.splice(index, 1, foundProduct)
        setCartItems(newCartItems)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }
    }
  }

  // remove cart item and update total price and total quantity
  const removeCartItem = (id: any) => {
    const index = cartItems.findIndex((product) => product._id === id)
    const newCartItems = [...cartItems] // copy the cart items to then use splice to remove the item (splice removes the original so we need to copy it first)
    const foundProduct = newCartItems[index]
    newCartItems.splice(index, 1)
    setCartItems(newCartItems)
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    )
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    )
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      // If the quantity is 1 or less, return 1. Else, return the previous quantity - 1.
      return prevQty <= 1 ? 1 : prevQty - 1
    })
  }

  return (
    <StateContext.Provider
      value={{
        showCart,
        setShowCart,
        showHamburgerMenu,
        setShowHamburgerMenu,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

// HOOK
export const useStateContext = () => useContext(StateContext)

// TIP: In Typescript this context file needs to have a .tsx extension
