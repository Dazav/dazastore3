import React, { createContext, useState } from 'react';

const CartContext = createContext({});

export function CartContextProvider({children}) {
    cosnt [cartProducts, setCartProducts] = useState([]);
    return (
        <CartContext.Provider value={{cartProducts}}>
            {children}
        </CartContext.Provider>
    );
}