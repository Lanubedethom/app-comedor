import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Sidebar.jsx";
import Modal from "../components/Modal.jsx";
import { useAdmin } from "../context/adminContext.jsx";



const Statistics = () => {

    const {
        mostrarVentanaConfirmacion,
        setMostrarVentanaConfirmacion,
        limpiarCupos,
        mostrarVentanaResultado,
        resultadoMensaje,
        cerrarVentanaResultado
        } = useAdmin();

    return (
        <>
            <Sidebar/>
            <Outlet />

            {mostrarVentanaConfirmacion && (
                <Modal
                    mensaje="¿Quieres limpiar todos los comensales?"
                    onClose={() => setMostrarVentanaConfirmacion(false)}
                >
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => { limpiarCupos(); setMostrarVentanaConfirmacion(false); }}>
                        Aceptar
                    </button>
                </Modal>
            )}

            {mostrarVentanaResultado && (
                <Modal mensaje={resultadoMensaje} onClose={cerrarVentanaResultado} />
            )}
        </>
)
};

export default Statistics;

