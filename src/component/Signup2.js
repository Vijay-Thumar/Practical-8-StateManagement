import React from "react";
import styles from './css/Signup.module.css';
import textcss from './css/TextField.module.css'
import SignupImg from '../assets/signup.png';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect } from 'react-redux';
import * as Yup from "yup";
import { Link, Navigate } from "react-router-dom";

let signupPayload = {
  image: null,
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};
const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/jpg"];
class Signup2 extends React.Component {
 constructor(props) { 
   super(props);
   this.state = {
    isSubmited: false,
  }
 }
 

  render() {

    const validate = Yup.object({
      name: Yup.string()
        .max(15, 'Name is too larg it must be in between 15 charcters *')
        .min(3, 'Name is too short *')
        .required('Required *'),

      email: Yup.string()
        .email('Invalid email *')
        .required('Required *'),

      phone: Yup.string()
        .max(10, 'Please enter valid phone number *')
        .min(10, 'Number must be 10 digits *')
        .required('Required *'),

      password: Yup.string()
        .required('Required *'),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password dosen\'t match *')
        .required('Required *'),
      image: Yup.mixed()
        .nullable()
        .required('Required *')
        .test(
          "fileSize",
          "File size is too large",
          value => value && value.size <= 2000000) // This is 2mb max writen in bytes
        .test(
          "fileFormat",
          "Unsupported Format",
          value => value && SUPPORTED_FORMATS.includes(value.type)),
    });

    return (
      <div className={`${styles.signup_section}`}>
        <div className={`${styles.flex_container}`}>
          {/* Form */}
          <div className={`${styles.form_container}`}>
            <Formik
              initialValues={{
                image: null,
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
              }}

              validationSchema={validate}

              onSubmit={
                values => {
                  console.log(values);
                  this.props.storeSignupData(values);
                  this.setState({ isSubmited: true });
                  console.log('data from store : \n' + this.props.uname + '\n' + this.props.uemail + '\n' + this.props.uphone + '\n' + this.props.upass + '\n' + this.props.ucpass);
                  const imgBlob = URL.createObjectURL(values.image);
                  values.image = imgBlob;
                  Object.assign(signupPayload, values);
                  console.log('print signupPayload value: ' + JSON.stringify(signupPayload));
                  // console.log('imgBlob: ' + values.image);
                }
              }
            >

              {({ errors, touched, setFieldValue, isValid }) => (
                <div className={`${styles.main_signup_container}`}>
                  <Form >
                    <h1>Sign up</h1>


                    <div className={`${styles.upload_img}`}>
                      <input type='file' name="image" id="image" hidden onChange={(event) => {
                        setFieldValue('image', event.target.files[0]);
                      }} />
                      <label htmlFor='image'><sup className={`${styles.required_field}`}>*</sup>photo +</label>
                      <br />
                      {errors.image && touched.image ? <span className={`${styles.required_field}`}>
                        <ErrorMessage name="image" />
                      </span> : null}
                    </div>

                    <label className={`${textcss.label_css}`}>Name<sup className={`${styles.required_field}`}>*</sup>  </label><br />
                    <span className={`${textcss.text_field}`}> <Field name="name" type="text" /></span><br />
                    {errors.name && touched.name ? <div className={`${textcss.formik_error}`}>{errors.name} </div> : null}

                    <label className={`${textcss.label_css}`}>Email<sup className={`${styles.required_field}`}>*</sup>  </label><br />
                    <span className={`${textcss.text_field}`}> <Field name="email" type="text" /></span><br />
                    {errors.email && touched.email ? <div className={`${textcss.formik_error}`}>{errors.email} </div> : null}

                    <label className={`${textcss.label_css}`}>PhoneNo<sup className={`${styles.required_field}`}>*</sup>  </label><br />
                    <span className={`${textcss.text_field}`}> <Field name="phone" /></span><br />
                    {errors.phone && touched.phone ? <div className={`${textcss.formik_error}`}>{errors.phone} </div> : null}

                    <label className={`${textcss.label_css}`}>Password<sup className={`${styles.required_field}`}>*</sup>  </label><br />
                    <span className={`${textcss.text_field}`}> <Field type="password" name="password" /></span><br />
                    {errors.password && touched.password ? <div className={`${textcss.formik_error}`}>{errors.password} </div> : null}

                    <label className={`${textcss.label_css}`}>ConfirmPassword<sup className={`${styles.required_field}`}>*</sup>  </label><br />
                    <span className={`${textcss.text_field}`}> <Field type="password" name="confirmPassword" /></span><br />
                    {errors.confirmPassword && touched.confirmPassword ? <div className={`${textcss.formik_error}`}>{errors.confirmPassword} </div> : null}

                    <button type="submit" className={`${styles.submit_button}`} >Submit</button>
                    {/* <button type="submit"><Link to='/home'>Submit2</Link></button> */}

                    <button type="reset" className={`${styles.reset_button}`} onClick={(data) => {

                      // data = data.initialValues;
                      this.props.clearSignupData();
                      console.log('data from store : \n' + this.props.uname + '\n' + this.props.uemail + '\n' + this.props.uphone + '\n' + this.props.upass + '\n' + this.props.ucpass);
                    }} >Reset</button>

                    <Link to="/home">go to home</Link>
                    {this.state.isSubmited ? <Navigate to='/home' /> : null}

                  </Form>
                </div>
              )
              }

            </Formik>
          </div>

          {/* Image */}
          <div>
            <img className={`${styles.signup_image}`} src={SignupImg} alt='Home page background_img'></img>
          </div>

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uname: state.name,
    uemail: state.email,
    uphone: state.phone,
    upass: state.password,
    ucpass: state.confirmPassword,
    allusers: state.allUsers,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    storeSignupData: () => dispatch({ type: 'storeSignupData', payload: signupPayload }),
    clearSignupData: () => dispatch({ type: 'clear' }),
    getAllUsers: () => dispatch({ type: 'getallusers' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup2);