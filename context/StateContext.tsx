import React, { createContext, useContext, useState } from 'react'

// CONTEXT
const StateContext = createContext({
  showCart: false as boolean,
  setShowCart: (showCart: boolean) => {},
})

// PROVIDER
export function StateContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [showCart, setShowCart] = useState(false)

  return (
    <StateContext.Provider
      value={{
        showCart,
        setShowCart,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

// HOOK
export const useStateContext = () => useContext(StateContext)

// TIP: In Typescript this context file needs to have a .tsx extension
