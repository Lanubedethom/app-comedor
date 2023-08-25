import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdAdminPanelSettings } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className='toggle-button'>
            <Link to='/' className='toggle-first-button'>
                <AiFillHome className='icon-house'/>
            </Link>
            <Link to='/login' className='toggle-second-button'>
                <MdAdminPanelSettings/>
            </Link>
        </div>
    )
}

export default Navbar;


/*
const Navbar = () => {
    return (
        <nav className='navbar-wrapper'>
            <div>
                <div>
                    <button>
                        <GiHamburgerMenu className='toggle-hamburger'/>
                    </button>
                </div>
                <div>
                    <ul>
                        <Link to='/' className=''>
                            Reservar
                        </Link>
                        <Link to='/login' className=''>
                            Admin
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
 */