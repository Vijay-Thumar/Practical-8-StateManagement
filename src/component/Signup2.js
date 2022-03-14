import React from "react";
import styles from './css/Signup.module.css';
import textcss from './css/TextField.module.css'
import UploadImg from "./UploadImg";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

class Signup2 extends React.Component {
  
  onFormSubmitHandler(values){
    values.preventDefault(); 
    console.log(formError); 
    // console.log(values);
  }
  render() {
    let   formError = {
      name: false,
      email: false,
      phone: false,
      password: false,
      confirmPassword: false,
    };
    

    const validate = Yup.object({
      name: Yup.string()
        .max(15, 'Name is too larg it must be in between 15 charcters')
        .min(3, 'Name is too short it must be greater than 3 charcters')
        .required('Name Required'),

      email: Yup.string()
        .email('Invalid email')
        .required('Email Required'),

        phone: Yup.string()
        .max(10, 'Please enter valid phone number')
        .min(10, 'number must be 10 digits')
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
        {({ errors, touched }) => (
          <div className={`${styles.main_signup_container}`}>
            <Form onSubmit={onFormSubmitHandler}>
              <h1>Sign up</h1>
              <UploadImg className={`${styles.profile_photo}`} />

              <label>Name</label><br />
              <span className={`${textcss.text_field}`}> <Field name="name" type="text" /></span><br />
              {errors.name && touched.name ? <div className={`${textcss.formik_error}`}>{errors.name} {formError.name=true}</div> : <div> {formError.name=false} </div>}

              <label>Email</label><br />
              <span className={`${textcss.text_field}`}> <Field name="email" type="text" /></span><br />
              {errors.email && touched.email ? <div className={`${textcss.formik_error}`}>{errors.email} {formError.email=true}</div> : <div> {formError.email=false} </div>}

              <label>PhoneNo</label><br />
              <span className={`${textcss.text_field}`}> <Field name="phone"/></span><br />
              {errors.phone && touched.phone ? <div className={`${textcss.formik_error}`}>{errors.phone} {formError.phone=true}</div> : <div> {formError.phone=false} </div>}

              <label>Password</label><br />
              <span className={`${textcss.text_field}`}> <Field name="password" type="text" /></span><br />
              {errors.password && touched.password ? <div className={`${textcss.formik_error}`}>{errors.password} {formError.password=true}</div> : <div> {formError.password=false} </div>}

              <label>confirmPassword</label><br />
              <span className={`${textcss.text_field}`}> <Field name="confirmPassword" type="text" /></span><br />
              {errors.confirmPassword && touched.confirmPassword ? <div className={`${textcss.formik_error}`}>{errors.confirmPassword} {formError.confirmPassword=true}</div> : <div> {formError.confirmPassword=false} </div>}

              <button type="submit" className={`${styles.submit_button} ${styles.form_buttons}`}>Submit</button>
              <button className={`${styles.reset_button} ${styles.form_buttons}`}>Reset</button>
            </Form>
          </div>
        )
        }

      </Formik>
    );
  }
}

export default Signup2;