import React from 'react'
import './NameAndLogo.css'

const NameAndLogo = props =>{
return <React.Fragment>
<div className='name-logo'>
    <div className='name'><h1>Electrify</h1></div>
    <div className='logo'><i class="fa-solid fa-bolt"></i></div>
</div>
</React.Fragment>
}



export default NameAndLogo;
