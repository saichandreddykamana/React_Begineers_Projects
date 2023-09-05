import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        let updatedItems = state.items.concat(action.item);
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVE_ITEM'){
        let updatedItems;
        const selectedItemIndex = state.items.findIndex(item => item.id === action.id);
        const selectedItem = state.items[selectedItemIndex];
        if(selectedItem && selectedItem.amount > 1){
            let updatedSelectedItem = {...selectedItem, amount: selectedItem.amount - 1};
            updatedItems =[...state.items];
            updatedItems[selectedItemIndex] = updatedSelectedItem;
        }else{
            updatedItems = [...state.items];
            updatedItems.splice(selectedItemIndex, 1);
        }
        const updatedTotalAmount = state.totalAmount - selectedItem.price;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    
    const addItemToCartHandler = item => {
        dispatchCartAction({type:'ADD_ITEM', item: item});
    };
    
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type:'REMOVE_ITEM', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;