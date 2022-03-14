import React from "react";
import styles from './css/Signup.module.css';
import TextField from "./TextField";
import UploadImg from "./UploadImg";
import { Formik, Form } from "formik";
import * as Yup from "yup";

class Signup extends React.Component {
  submitHandler(event){
    
  }
  render() {
    const validate = Yup.object({
        name: Yup.string()
          .max(15, 'Name is too larg it must be in between 15 charcters')
          .min(3, 'Name is too short it must be greater than 3 charcters')
          .required('Name Required'),
    
        email: Yup.string()
          .email('Invalid email')
          .required('Email Required'),
    
        phoneNo: Yup.number()
          .max(10, 'Please enter valid phone number')
          .min(10, 'number must be 10 digits')
          .required('Phone Number Required'),
    
        password: Yup.string()
          .max(15, 'Please enter valid password')
          .required('Password Required'),
    
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'password dosen\'t match')
          .required('Confirm password is Required'),
      });
    
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
      >
        {(formik) => (
          <div>
            <h1>Sign up</h1>
              <Form >
                <UploadImg className={`${styles.profile_photo}`}/>
                <TextField label="Name" name="name" type="text"/>
                <TextField label="Email" name="email"   type="text"/>
                <TextField label="PhoneNo" name="phone" type="text"/>
                <TextField label="Password" name="password"  type="text"/>
                <TextField label="Confirm Password" name="confirmPassword" type="text"/>
                  <button className={`${styles.submit_button} ${styles.form_buttons}`}>Submit</button>
                  <button className={`${styles.reset_button} ${styles.form_buttons}`}>Reset</button>
              </Form>
            </div>
        )}
      </Formik>
    );
  }
}

export default Signup;