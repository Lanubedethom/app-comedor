import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AdminForm = () => {
    return (
        <div className="form-wrapper-admin">
            <h2 className="title-form">ADMIN SESÍON</h2>
            <Formik
                initialValues={{
                    user: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    user: Yup.string()
                        .required("Requerido"),
                    password: Yup.string()
                        .required('Requerido')
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className="form-student">
                    <div className="form-group">
                        <label htmlFor="user" className="form-control-label">
                            USUARIO
                        </label>
                        <Field
                            name="user"
                            type="text"
                            className="form-control"
                            placeholder="Ingresa tu usuario"
                        />
                        <ErrorMessage
                            name="user"
                            component="div"
                            className="error-student_code"
                        />
                        <label htmlFor="password" className="form-control-label">
                            CONTRASEÑA
                        </label>
                        <Field
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Ingresa tu contraseña"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="error-student_code"
                        />
                    </div>

                    <div className="loginbttm">
                        <div className="login-button">
                            <button type="submit" className="btn btn-outline-primary">
                                LOG IN
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default AdminForm;