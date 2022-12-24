import React, {useState ,useContext} from 'react'
import './ProductItem.css'
import Button from '../../UI/Button'
import CartContext from '../../store/cart-context'
const ProductItem = props =>{
    
    const cartctx = useContext(CartContext)
    function addItemHandler(){
        cartctx.addItem({id:props.id,name:props.name,
        price:props.price})
    }

    return <React.Fragment>

{!props.descView ? <div className='product-item'>
<div className='product-image'><img src={props.image} alt=''/></div>
<div className='product-title'>{props.name}</div>
<div className='section2'>
<div className='product-price'>${props.price}</div>
<Button title={'Add to Cart'} onClick={addItemHandler} /> 
</div>
 </div>:
 <div className='product-item' style={{'width': '47%', 'display':'inline-block','border': 'solid 1px', 'padding': '12px'}}>
<div className='product-image' ><img style={{'float': 'left','width':'28%','marginRight':'3%'}} src={props.image} alt=''/></div>
<div className='product-title' style={{'marginBottom': '2%'}}>{props.name}</div>
<div className='product-description' style={{'fontSize':'1.2rem'}}>{props.description}</div>
<div className='section2'>
<div className='product-price'>${props.price}</div>
<Button title={'Add to Cart'} onClick={addItemHandler} /> 
</div>
 </div>
 
}
    </React.Fragment>
}

export default ProductItem;
