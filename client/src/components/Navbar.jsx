import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdAdminPanelSettings } from 'react-icons/md';
import '../Navbar.css'

const Navbar = () => {
    return (
        <div className='toggle-button'>
            <Link to='/' className='toggle-first-button'>
                <AiFillHome className='icon-house'/>
            </Link>
            <Link to='/admin' className='toggle-second-button'>
                <MdAdminPanelSettings/>
            </Link>
        </div>
    )
}

export default Navbar;

