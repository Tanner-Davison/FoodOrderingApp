import CartContext from "./cart-context"
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cartReducer = (state, action) => {
    if (action.type === 'Add') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CarrtProvider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCart({type:'Add', item: item})
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCart({type:'Remove', id: id})
    };
    const cartContext = {
        items: [cartState.items],
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CarrtProvider;