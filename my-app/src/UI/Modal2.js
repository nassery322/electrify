import ReactDOM from 'react-dom'
import React from 'react';
import './Modal2.css'

const Backdrop = props => {
  return  <div className='backdrop' id='backdrop' onClick={props.onClick}/>
}
const Overlay = props => {
return <div className='modal2' id='modal'><div className='modal-content'>{props.children}</div></div>
}

const Modal2 = props => {

return  <React.Fragment>
     {ReactDOM.createPortal(<Backdrop onClick={props.onClick}  />, document.getElementById('overlay'))}
   {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay'))} 
        </React.Fragment>

}

export default Modal2;