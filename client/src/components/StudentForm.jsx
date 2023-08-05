import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { bookRequest } from "../api/auth.js";


const StudentForm = () => {

    const handleReservation = async (values, { setSubmitting }) => {
        try {
            const res = await bookRequest({ code: values.codigo })
            console.log(res)
            switch (res.data.status) {
                case 200:
                    alert(res.data.message);
                    break;
                case 404:
                    alert(res.data.message);
                    break;
                case 409:
                    alert(res.data.message);
                    break;
                default:
                    alert('error inesperado')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };


    //resto del codigo

    return (
        <div className="form-wrapper">
            <h2 className="title-form">RESERVAR UN CUPO</h2>
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
                            CÓDIGO
                        </label>
                        <Field
                            name="codigo"
                            type="text"
                            className="form-control"
                            placeholder="Ingresa tu código"
                            autoComplete="off"
                        />
                        <ErrorMessage
                            name="codigo"
                            component="div"
                            className="error-student_code"
                        />
                    </div>

                    <div className="loginbttm">
                        <div className="login-button">
                            <button type="submit" className="btn btn-outline-primary">
                                ENVIAR
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default StudentForm;




