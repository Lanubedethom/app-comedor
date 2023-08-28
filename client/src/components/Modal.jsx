import { FiX } from 'react-icons/fi';
import ButtonModal from "./ButtonModal.jsx";

const Modal = ({ mensaje, onClose, btnMessage, title }) => {
    return (
        <div className="ventana-container">
            <div className="ventana">
                <div className='modal-header'>
                    <p>{title}</p>
                    <button className="cerrar-btn" onClick={onClose}>
                        <FiX />
                    </button>
                </div>
                <p className="mensaje">{mensaje}</p>
                <div className='modal-footer'>
                    <ButtonModal onClose={onClose} message={btnMessage}/>
                </div>
            </div>
        </div>
    );
};

export default Modal;

