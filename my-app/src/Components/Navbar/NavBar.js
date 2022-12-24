import './NavBar.css'
import NameAndLogo from '../NameAndLogo';
import NavContent from './NavContent';

const NavBar = () =>{
return (
    <div className='nav-bar'>
        <NameAndLogo />
        <NavContent />
    </div>
)
}

export default NavBar;