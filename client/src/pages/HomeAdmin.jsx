import { Outlet } from 'react-router-dom'
//import Sidebar from "../components/Sidebar.jsx";
import Modal from "../components/Modal.jsx";
import { useAdmin } from "../context/adminContext.jsx";
import FooterAdmin from "../components/FooterAdmin.jsx";
import HeaderAdmin from "../components/HeaderAdmin.jsx";



const HomeAdmin = () => {

    const {
        mostrarVentanaConfirmacion,
        setMostrarVentanaConfirmacion,
        limpiarCupos,
        mostrarVentanaResultado,
        resultadoMensaje,
        cerrarVentanaResultado
        } = useAdmin();

    return (
        <div className='admin-wrapper'>
            <HeaderAdmin/>
            <section className='section-admin'>
                <Outlet />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet aspernatur autem deserunt dolores earum excepturi facilis ipsa iusto laudantium magni necessitatibus numquam perspiciatis, placeat quia quo sapiente voluptas!
            </section>

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

            <FooterAdmin/>
        </div>
    );
};

export default HomeAdmin;

