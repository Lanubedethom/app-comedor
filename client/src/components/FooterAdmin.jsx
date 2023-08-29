import { links } from "../data/dataSidebar.jsx";

const FooterAdmin = () => {
    const filterLinks = links.filter(link => {
        if (link.id < 5)
            return link
    })
    return (
        <footer className='footer-container-admin'>
            {filterLinks.map(link => {
                const { id, icon, text } = link;
                return (
                    <div key={id} className='footer-icon-admin'>
                        {icon}
                    </div>
                )
            })}
        </footer>
    )
}

export default FooterAdmin;



