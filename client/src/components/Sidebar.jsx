import { Link } from 'react-router-dom';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { useAdmin } from '../context/adminContext.jsx';
import { GiHamburgerMenu } from 'react-icons/gi';
import {useEffect, useRef, useState} from "react";
import { links } from "../data/dataSidebar.jsx";

const Sidebar = () => {
    const { setMostrarVentanaConfirmacion } = useAdmin();
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks)
            linksContainerRef.current.style.height = `${linksHeight}px`
        else
            linksContainerRef.current.style.height = '0px';
    }, [showLinks])

    links[3].accion = () => {
        setMostrarVentanaConfirmacion(true)
    }

    const displayLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
        <aside className='sidebar'>
            <div className='header-icons-admin'>
                <HiOutlineLightningBolt  className="icon-admin" />
                <GiHamburgerMenu onClick={displayLinks} className='icon-hamburger' />
            </div>
            <div className='links-container' ref={linksContainerRef}>
                <ul className={showLinks ? 'links showListContainer' : 'links'} ref={linksRef}>
                    {links.map((link) => {
                        //const { id, url, text, icon, accion } = link;
                        return (
                            <Link
                                className='links-item'
                                key={link.id}
                                to={link.url}
                                onClick={link.accion ? link.accion:null}
                            >
                                {link.icon}
                                {link.text}
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;



