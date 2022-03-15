import React from "react";
import styles from './css/Login.module.css'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
class Login extends React.Component {
    render() {
        // default values for formik fields
        const defaultValues = {
            user_name: '',
            user_password: '',
        };

        // yup object for formik valadation 
        const validationV = Yup.object({

        });

        const onSubmitHandler = values => {

        };

        return (
            <div className={`${styles.login_container}`}>
                <Formik
                    // formik take 3 attribute 
                    // 1.default_values 2.valadition_schema 3.onSubmit_method
                    initialValues={defaultValues}
                    validationSchema={validationV}
                    onSubmit={onSubmitHandler}
                >

                    <Form>

                        <label>User Name</label>
                        <Field type='text' name='username' id='username'> </Field>
                        <ErrorMessage name="username"></ErrorMessage>
                        <label>User Password</label>
                        <Field type='text' name='userpassword' id='userpassword'> </Field>

                    </Form>

                </Formik>
            </div>
        )
    }
}

export default Login;