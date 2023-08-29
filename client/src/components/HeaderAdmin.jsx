import { HiOutlineLightningBolt } from "react-icons/hi";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";


const HeaderAdmin = () => {
    return (
        <header className='header-container-admin'>
            <div className='wrapper-right-icons'>
                <HiOutlineLightningBolt  className="icon-admin" />
                <p>Admin</p>
            </div>
            <div className='wrapper-left-icons'>
                <span><AiOutlineSearch /></span>
                <span><AiOutlineSetting /></span>
            </div>
        </header>
    )
}


export default HeaderAdmin;


