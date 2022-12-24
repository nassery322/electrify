import React,{useState} from 'react'
import './ProductFilter.css'

const ProductFilter = props =>{

const [view, setView] = useState(false)
props.onView(view)


function gridHandler(){
setView(false)
}
function detailHandler(){
setView(true)
props.onView(view)
}
function changeHandler(event){
//console.log(event.target.value)
props.onSort(event.target.value)
}
    
    return <React.Fragment>
    <div className='product-filter'>
        <div className='sorting'>
            <form>
            Sort by :  <select defaultValue={'Relevence'} onChange={changeHandler}>
                    <option  >Relevence</option>
                    <option>Latest</option>
                    <option >Price</option>
                </select>
            </form>
        </div>
        <div className='view'>
            View:  {!view? <button className='grid-view' style={{'background': '#ccc'}} id='grid' onClick={gridHandler}>Grid</button> : <button className='grid-view' style={{'background': 'white'}} id='grid' onClick={gridHandler}>Grid</button>}
            {view?<button className='detail-view' id='details' style={{'background': '#ccc'}} onClick={detailHandler}>Details</button>: <button className='detail-view' id='details' style={{'background': 'white'}} onClick={detailHandler}>Details</button>}
        </div>
    </div>
    </React.Fragment>
}


export default ProductFilter;