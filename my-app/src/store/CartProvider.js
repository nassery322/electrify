import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items:[],
    totalAmount:0
}
function cartReducer(state, action){
    
    if(action.type === 'add'){
        console.log(action.item)
        let updatedTotalAmount;
        const existingCartItemIndex = state.items.findIndex( item => item.id === action.item.id );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems
        if(existingCartItem){
          updatedTotalAmount  = state.totalAmount;
            const updatedItem = {
                ...existingCartItem
            }
            updatedItems = [...state.items];
            updatedItem[existingCartItemIndex] = updatedItem;
        }
        else{
            updatedTotalAmount =  state.totalAmount + action.item.price;
            updatedItems = state.items.concat(action.item)
        }
        return {items:updatedItems, totalAmount:updatedTotalAmount}
    }
    if(action.type === 'remove'){
        // const existingCartItemIndex = state.items.findIndex( item => item.id === action.id);
        // const existingCartItem = state.items[existingCartItemIndex];
        
        // let updatedItems;
        // if(existingCartItemIndex){
          const updatedItems = state.items.filter( item => item.id !== action.item.id )
          const updatedTotalAmount = state.totalAmount - action.item.price; 
      //  }
      //  else{
            // const updatedItem = {...existingCartItem};
            // updatedItems = [...state.items];
            // updatedItems[existingCartItem] = updatedItem;

      //  }
        return {items:updatedItems, totalAmount:updatedTotalAmount}
    }
    return defaultCartState
}
const CartProvider = props =>{
const [cartState, dispatchAction] =useReducer(cartReducer, defaultCartState)

const addItemHandler = item =>{
dispatchAction({type:'add', item:item})
//console.log(item)
}
const removeItemHandler = item =>{
    dispatchAction({type:'remove', item:item})
}
const cartContext = {
    items:cartState.items,
    totalAmount: cartState.totalAmount,
    addItem:addItemHandler,
    removeItem:removeItemHandler
}
return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider