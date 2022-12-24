import React from 'react';
import './Button.css'

const Button = props =>{
return <button className='button-card' onClick={props.onClick} style={props.style}>{props.title}</button>
}

export default Button;