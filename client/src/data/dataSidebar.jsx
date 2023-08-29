import { FaHome } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineSetting, AiOutlineBarChart } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { MdCleaningServices } from 'react-icons/md';


export const links = [
    {
        id: 1,
        url: '/statistics',
        text: 'Home',
        icon: <FaHome />,
    },
    {
        id: 2,
        url: 'listbook',
        text: 'Diners',
        icon: <BsCardChecklist />,
    },
    {
        id: 3,
        url: '/statistics',
        text: 'Analyze',
        icon: <AiOutlineBarChart />,
    },
    {
        id: 4,
        url: '/statistics',
        text: 'Clean',
        icon: <MdCleaningServices />,
    },
    {
        id: 5,
        url: '/statistics',
        text: 'Settings',
        icon: <AiOutlineSetting />,
    },
    {
        id: 6,
        url: '/',
        text: 'Leave',
        icon: <FiLogOut/>,
    },
];

