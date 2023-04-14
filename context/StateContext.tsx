import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { IProduct, ICartItem } from '@/types'

// CONTEXT
const StateContext = createContext({
  showCart: false as boolean,
  setShowCart: (showCart: boolean) => {},
  showHamburgerMenu: false as boolean,
  setShowHamburgerMenu: (showHamburgerMenu: boolean) => {},
  cartItems: [] as ICartItem[],
  setCartItems: (cartItems: ICartItem[]) => {},
  totalPrice: 0 as number,
  setTotalPrice: (totalPrice: number) => {},
  totalQuantities: 0 as number,
  setTotalQuantities: (totalQuantities: number) => {},
  qty: 1 as number,
  setQty: (qty: number) => {},
  incQty: () => {},
  decQty: () => {},
  onAdd: (product: IProduct, quantity: number) => {},
  updateCartItemQuantity: (id: string, value: string) => {},
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
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  // When the user adds a product to the cart
  const onAdd = (product: IProduct, quantity: number) => {
    // Find the item in the cart
    const checkProductInCart = cartItems.find(
      // Check if the item's _id is the same as the product's _id
      (item: ICartItem) => item._id === product._id
    )

    // Update the total price and total quantity of the cart
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    // If the product is already in the cart
    if (checkProductInCart) {
      // Find the product in the cart and increase the quantity.
      const updatedCartItems = cartItems.map((cartProduct: ICartItem) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          }

        return cartProduct
      })

      // Replace the cart items with the updated cart items.
      setCartItems(updatedCartItems)
    } else {
      // The product is not in the cart

      // Create a new product object with the quantity property
      const newProduct: ICartItem = {
        ...product,
        quantity: quantity,
      }

      // Add the new product to the cart items.
      setCartItems([...cartItems, newProduct])
    }

    toast.success(
      (t) => (
        <span
          // padding included here so that all the toast is clickable
          style={{
            paddingTop: '0.4rem',
            paddingBottom: '0.4rem',
            cursor: 'pointer',
          }}
          // dismiss toast on click
          onClick={() => toast.dismiss(t.id)}
        >
          {/* any jsx content here */}
          {qty} {product.name} added to cart
        </span>
      ),
      {
        // TIP: By giving it an id, yu can dismiss it with toast.dismiss('custom-toast')
        // TIP: When you give it an id, only one toast with that id can be shown at a time
        id: 'toast-add-to-cart', // unique id

        // duration: 2000,
        style: {
          // fontWeight: 'bold',
          border: '1px solid #000',
          paddingLeft: '1rem',
          color: '#000',
          backgroundColor: '#eef2ff',
          userSelect: 'none',
        },
        iconTheme: {
          primary: '#6366f1',
          secondary: '#eef2ff',
        },
      }
    )
  }

  const updateCartItemQuantity = (id: string, value: string) => {
    //  find the index of the product in the cartItems array
    const index = cartItems.findIndex((product) => product._id === id)

    // create a new array to avoid mutating the original cartItems array
    const newCartItems = [...cartItems]

    // if the value is 'inc', increase the quantity by 1
    if (value === 'inc') {
      const foundProduct = {
        ...newCartItems[index],
        quantity: newCartItems[index].quantity + 1,
      }

      // replace the item at the same index with the new item
      newCartItems.splice(index, 1, foundProduct)
      setCartItems(newCartItems)

      // update the total price and total quantity
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)

      // if the value is 'dec', decrease the quantity by 1
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
  const removeCartItem = (id: string) => {
    const index = cartItems.findIndex((product) => product._id === id)

    // copy the cart items to then use splice to remove the item (splice removes the original so we need to copy it first)
    const newCartItems = [...cartItems]
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
        updateCartItemQuantity,
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
