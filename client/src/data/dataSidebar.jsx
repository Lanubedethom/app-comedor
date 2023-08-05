import { FaHome } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineSetting, AiOutlineBarChart } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { MdCleaningServices } from 'react-icons/md';

export const links = [
    {
        id: 1,
        url: '/statistics',
        text: 'Inicio',
        icon: <FaHome />,
        accion: () => {alert("pagina de inicio")}
    },
    {
        id: 2,
        url: '/statistics',
        text: 'Listar Beneficiados',
        icon: <BsCardChecklist />,
        accion: () => {alert("listar beneficiados")}
    },
    {
        id: 3,
        url: '/statistics',
        text: 'Analizar Uso',
        icon: <AiOutlineBarChart />,
        accion: () => {alert("analizar uso")}
    },
    {
        id: 4,
        url: '/statistics',
        text: 'Limpiar cupos',
        icon: <MdCleaningServices />,
        accion: () => {alert("limpiar cupos")}
    },
    {
        id: 5,
        url: '/statistics',
        text: 'Ajustes',
        icon: <AiOutlineSetting />,
        accion: () => {alert("ajustes")}
    },
    {
        id: 6,
        url: '/',
        text: 'Salir',
        icon: <FiLogOut/>,
        accion: () => {console.log("pagina de inicio")}
    },
];

