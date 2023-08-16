import { FiX } from 'react-icons/fi';

const Ventana = ({ mensaje, onClose, children }) => {
    return (
        <div className="ventana-container">
            <div className="ventana">
                <button className="cerrar-btn" onClick={onClose}>
                    <FiX />
                </button>
                <p className="mensaje">{mensaje}</p>
                {children}
            </div>
        </div>
    );
};

export default Ventana;
