import { Link } from 'react-router-dom';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { FaHome } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineSetting, AiOutlineBarChart } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { MdCleaningServices } from 'react-icons/md';
import { useAdmin } from '../context/adminContext.jsx';
import { GiHamburgerMenu } from 'react-icons/gi';
import {useEffect, useRef, useState} from "react";

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

    const links = [
        {
            id: 1,
            url: '/statistics',
            text: 'Inicio',
            icon: <FaHome />,
            accion: () => {
                console.log('inicio');
            },
        },
        {
            id: 2,
            url: 'listbook',
            text: 'Listar Beneficiados',
            icon: <BsCardChecklist />,
            accion: () => {
                console.log('listar beneficiados');
            },
        },
        {
            id: 3,
            url: '/statistics',
            text: 'Analizar Uso',
            icon: <AiOutlineBarChart />,
            accion: () => {
                alert('analizar uso');
            },
        },
        {
            id: 4,
            url: '/statistics',
            text: 'Limpiar cupos',
            icon: <MdCleaningServices />,
            accion: () => {
                setMostrarVentanaConfirmacion(true);
            },
        },
        {
            id: 5,
            url: '/statistics',
            text: 'Ajustes',
            icon: <AiOutlineSetting />,
            accion: () => {
                alert('ajustes');
            },
        },
        {
            id: 6,
            url: '/',
            text: 'Salir',
            icon: <FiLogOut />,
            accion: () => {
                console.log('pagina de inicio');
            },
        },
    ];

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
                        const { id, url, text, icon, accion } = link;
                        return (
                            <Link className='links-item' key={id} to={url} onClick={() => accion()}>
                                {icon}
                                {text}
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;



