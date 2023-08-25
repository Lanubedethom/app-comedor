import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Sidebar.jsx";
import Ventana from "../components/Ventana.jsx";
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
                <Ventana
                    mensaje="¿Quieres limpiar todos los comensales?"
                    onClose={() => setMostrarVentanaConfirmacion(false)}
                >
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => { limpiarCupos(); setMostrarVentanaConfirmacion(false); }}>
                        Aceptar
                    </button>
                </Ventana>
            )}

            {mostrarVentanaResultado && (
                <Ventana mensaje={resultadoMensaje} onClose={cerrarVentanaResultado} />
            )}
        </>
)
};

export default Statistics;

