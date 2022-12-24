import ReactDOM from 'react-dom'
import React from 'react';
import './Modal.css'

const Backdrop = props => {
  return  <div className='backdrop' id='backdrop' onClick={props.onClick}/>
}
const Overlay = props => {
return <div className='modal' id='modal' style={props.style}><div className='modal-content'>{props.children}</div></div>
}

const Modal = props => {


return  <React.Fragment>
     {ReactDOM.createPortal(<Backdrop onClick={props.onClick}  />, document.getElementById('overlay'))}
   {ReactDOM.createPortal(<Overlay style={props.style}>{props.children}</Overlay>, document.getElementById('overlay'))} 
        </React.Fragment>

}

export default Modal;