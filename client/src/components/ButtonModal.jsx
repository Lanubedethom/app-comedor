
const ButtonModal = ({ message, onClose }) => {
    return (
        <button
            className='button-modal'
            onClick={onClose}
        >
            {message}
        </button>
    )
}

export default ButtonModal;


