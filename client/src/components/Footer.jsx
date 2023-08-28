import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <footer className='footer-container'>
            <p className='footer-user'>Ciro</p>
            <p className='footer-text'>
                {location.pathname === '/' ? (
                    <>
                        <span>Login as </span>
                        <Link to='/login' className='footer-link'>
                            Admin
                        </Link>
                    </>
                ) : (
                    <>
                        <span>Back to </span>
                        <Link to='/' className='footer-link'>
                            Book
                        </Link>
                    </>
                )}
            </p>
        </footer>
    );
};

export default Footer;
