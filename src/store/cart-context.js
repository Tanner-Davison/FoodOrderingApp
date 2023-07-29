import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (items) => { },
    removeItem: (Id) => { }
})
export default CartContext;