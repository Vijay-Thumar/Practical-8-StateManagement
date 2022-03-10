import React from 'react'
import { Form, Input,
  //   InputNumber, Cascader, Select, Row, Col, Checkbox, Button 
  } from 'antd';

import { Formik } from 'formik';
import * as Yup from 'yup';

import TextField from './TextField';
import styles from './css/Signup.module.css';
import UploadImg from './UploadImg';

function Signup() {

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
    .oneOf([ Yup.ref('password'),null], 'password dosen\'t match')
    .required('Confirm password is Required'),
  })
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phoneNo: '',
          password: '',
          confirmPassword: ''
        }
        }
        validationSchema={validate}
      >
        {formik => (
          <div className={`${styles.flex_container}`}>
            <h1 className='my-4 font-weight-bold-display-4'>Sign up</h1>
            {console.log(formik.values)}
            <Form>
              <div className={`${styles.profile_photo}`}><UploadImg/></div>
              <TextField label="Name" name="name" type="text" />
              <TextField label="Email" name="email" type="text" />
              <TextField label="Phone No" name="phoneNo" type="text" />
              <TextField label="Password" name="password" type="text" />
              <TextField label="Confirm Password" name="confirmPassword" type="text" />
              <div className={`${styles.form_buttons}`}>
              <button className={`${styles.submit_button}`}>Submit</button>
              <button className={`${styles.reset_button}`}>Reset</button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Signup