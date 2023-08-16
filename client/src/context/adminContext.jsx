import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { resetBooked } from "../api/auth.js";

export const AdminContext = createContext();

export const useAdmin = () => {
    return useContext(AdminContext);
}

export const AdminProvider = ({ children }) => {
    const [isSidebarOpen, setIsSideBarOpen] = useState(false)
    const [mostrarVentanaConfirmacion, setMostrarVentanaConfirmacion] = useState(false);
    const [mostrarVentanaResultado, setMostrarVentanaResultado] = useState(false);
    const [resultadoMensaje, setResultadoMensaje] = useState('');

    const limpiarCupos = async () => {
        try {
            const res = await resetBooked();
            console.log(res);
            if (res.data.status === 200) {
                setResultadoMensaje('Cupos eliminados');
            }
        } catch (error) {
            console.log(error);
            setResultadoMensaje('Error al eliminar los cupos');
        } finally {
            setMostrarVentanaResultado(true);
        }
    };

    const cerrarVentanaResultado = () => {
        setMostrarVentanaResultado(false);
    };

    const openSidebar = () => {
        setIsSideBarOpen(true);
    }

    const closeSidebar = () => {
        setIsSideBarOpen(false)
    }

    return (
        <AdminContext.Provider
            value={{
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                mostrarVentanaConfirmacion,
                mostrarVentanaResultado,
                setMostrarVentanaConfirmacion,
                setMostrarVentanaResultado,
                resultadoMensaje,
                setResultadoMensaje,
                limpiarCupos,
                cerrarVentanaResultado
            }}>
            {children}
        </AdminContext.Provider>
    )
}

AdminProvider.propTypes = {
    children: PropTypes.node.isRequired
};