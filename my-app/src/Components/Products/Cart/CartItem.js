import React,{useContext} from 'react';
import './CartItem.css'
import CartContext from '../../../store/cart-context';
const CartItem = (props) => {
//     const cartctx = useContext(CartContext);
// function removeHandler(item){
//   console.log(item.id)
//   cartctx.removeItem(item.id)
// }
  return (
    <div className="cart-item">
      <div className="cart-item-title">{props.title}</div>
      <div className="cart-item-price">{props.price}</div>
      <button className="cart-item-remove" onClick={props.onRemove}>Remove</button>
    </div>
  );
};

export default CartItem;