import React,{useContext} from 'react'
import './ProductsHeader.css'
import CartContext from '../../store/cart-context'
const ProductsHeader = props =>{
    const cartctx = useContext(CartContext)
    
    return <React.Fragment>
        <div className='products-header'>
        <div className='main-header'>Products</div>
        <div className='cart-button' onClick={props.onCartOpen}>
    <span className='icon'><i class="fa-solid fa-cart-shopping"></i></span>
    <span className='cart-items'>{cartctx.items.length}</span>
        </div>
        </div>
    </React.Fragment>
}

export default ProductsHeader;