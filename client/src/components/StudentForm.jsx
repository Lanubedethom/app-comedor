import { Formik, Field, Form, ErrorMessage } from "formik";
import {useState} from "react";
import * as Yup from "yup";
import { bookRequest } from "../api/auth.js";
import { BiSolidDish } from 'react-icons/bi';
import Modal from "./Modal.jsx";
import Footer from "./Footer.jsx";

const modalTitle = 'Message'
const modalBtnText = 'Got it'


const StudentForm = () => {

    const [mostrarVentana, setMostrarVentana] = useState(false);
    const [ventanaMensaje, setVentanaMensaje] = useState('');

    const handleReservation = async (values, { setSubmitting }) => {
        try {
            const res = await bookRequest({ code: values.codigo });
            switch (res.data.status) {
                case 200:
                case 404:
                case 409:
                    setVentanaMensaje(res.data.message);
                    setMostrarVentana(true);
                    break;
                default:
                    setVentanaMensaje('Error inesperado');
                    setMostrarVentana(true);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    const cerrarVentana = () => {
        setMostrarVentana(false);
    };


    //resto del codigo

    return (
        <div className="form-wrapper">
            <div className="header-form">
                <BiSolidDish className="diner-icon" />
                <h2 className="title-form">BOOK A SLOT</h2>
            </div>
            <Formik
                initialValues={{
                    codigo: "",
                }}
                validationSchema={Yup.object({
                    codigo: Yup.string()
                        .max(6, "Debe tener un máximo de 6 dígitos")
                        .min(6, "Debe tener un mínimo de 6 dígitos")
                        .required("Requerido"),
                })}
                onSubmit={ handleReservation }
            >
                <Form className="form-student">
                    <div className="form-group">
                        <label htmlFor="codigo" className="form-control-label">
                            CODE
                        </label>
                        <Field
                            name="codigo"
                            type="text"
                            className="form-control"
                            placeholder="Enter your code"
                            autoComplete="off"
                        />
                        <ErrorMessage
                            name="codigo"
                            component="div"
                            className="error-student_code"
                        />
                    </div>

                    <div className="loginbttm">
                            <button type="submit" className="btn btn-outline-primary">
                                BOOK
                            </button>
                    </div>
                </Form>
            </Formik>
            {mostrarVentana && <Modal mensaje={ventanaMensaje} onClose={cerrarVentana} btnMessage={modalBtnText} title={modalTitle} />}
        </div>
    );
};

export default StudentForm;




