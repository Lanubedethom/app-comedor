import { links } from "../data/dataSidebar.jsx";
import { Link } from 'react-router-dom'
import { HiOutlineLightningBolt } from "react-icons/hi";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <HiOutlineLightningBolt className="icon-admin"/>
            <ul className='links'>
                {links.map((link) => {
                    const { id, url, text, icon, accion } = link;
                    return (
                        <Link key={id} to={url} onClick={() => accion()}>
                            {icon}
                            {text}
                        </Link>
                    )
                })}
            </ul>
        </aside>
    )
}


export default Sidebar;



