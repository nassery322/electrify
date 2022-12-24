import React, {useState} from 'react'
import './NavContent.css'
import Modal from '../../UI/Modal'
import Modal2 from '../../UI/Modal2'
const NavContent = props =>{
    const [navBtn, setNavBtn] = useState(false)
function navBtnHandler(){
    setNavBtn(event => !event)
    
}
const styles = {
    'display': 'block',
    'textAlign':'center',
    
}
return <React.Fragment>
     
        <div className='nav-content'>
        {navBtn?
   <> <Modal2 onClick={navBtnHandler}>
     <ul>
         <li style={{'backgroundColor': 'orange', 'display': 'inline-block', 'width': '100%'}}><a style={styles} onClick={navBtnHandler} href='#'>Home</a></li>
         <li><a style={styles} onClick={navBtnHandler} href='#services'>Services</a></li>
         <li><a style={styles} onClick={navBtnHandler} href='#products'>Products</a></li>
         <li><a style={styles} onClick={navBtnHandler} href='#about'>About</a></li>
         <li><a style={styles} onClick={navBtnHandler} href='#contact'>Contact</a></li>
         
     </ul>
    </Modal2>
    <ul>
    <li id='nav-btn' onClick={navBtnHandler} style={{'marginLeft':'115px'}}> <i  class="fa-solid fa-bars"></i></li>
    </ul>
    </>
    

        :<ul>
         <li><a href='#'>Home</a></li>
         <li><a href='#services'>Services</a></li>
         <li><a href='#products'>Products</a></li>
         <li><a href='#about'>About</a></li>
         <li><a href='#contact'>Contact</a></li>
         <li id='nav-btn' onClick={navBtnHandler}> <i  class="fa-solid fa-bars"></i></li>
     </ul>}
     
        </div>
        

</React.Fragment>
}

export default NavContent