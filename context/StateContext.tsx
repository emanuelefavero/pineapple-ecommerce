import React, { createContext, useContext, useState } from 'react'

// TODO: Move as much state as possible to this context file

// CONTEXT
const StateContext = createContext({
  showCart: false as boolean,
  setShowCart: (showCart: boolean) => {},
  showHamburgerMenu: false as boolean,
  setShowHamburgerMenu: (showHamburgerMenu: boolean) => {},
})

// PROVIDER
export function StateContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [showCart, setShowCart] = useState(false)
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

  return (
    <StateContext.Provider
      value={{
        showCart,
        setShowCart,
        showHamburgerMenu,
        setShowHamburgerMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

// HOOK
export const useStateContext = () => useContext(StateContext)

// TIP: In Typescript this context file needs to have a .tsx extension
