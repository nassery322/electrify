import { useContext } from 'react';
import Button from '../../../UI/Button';
import Modal from '../../../UI/Modal';
import './Cart.css'
import CartItem from './CartItem';
import CartContext from '../../../store/cart-context';
const Cart = props =>{
    const cartctx = useContext(CartContext)
    const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`
    function removeHandler(item){
        cartctx.removeItem(item)
    }
return <Modal onClick={props.onCartClose} style={props.style}>
    <div className='cart'>
        <div className='cart-items'>
            {cartctx.items.map( item => <CartItem title={item.name} price={item.price} onRemove={removeHandler.bind(null, item)} /> )}
            
        </div>
        <div className='cart-control'>
<div className='total-amount'>{totalAmount}</div>
<div className='cart-buttons'>
   <button className='close-btn' onClick={props.onCartClose}>Close</button>
   <button className='order-btn'>Order</button>
</div>
        </div>
    </div>
</Modal>
}

export default Cart;