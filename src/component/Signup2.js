import React from "react";
import styles from './css/Signup.module.css';
import textcss from './css/TextField.module.css'
import SignupImg from '../assets/signup.png';
import UploadImg from "./UploadImg";
import { Formik, Form, Field } from "formik";
import { connect } from 'react-redux';
import * as Yup from "yup";
import { Link } from "react-router-dom";
import imgstyles from './css/UploadImg.module.css'
// import { Link } from "react-router-dom";

let signupPayload = {
  image: "",
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};
class Signup2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSubmited: false,
      isValidate: false,
    }

  }

  render() {

    let formError = {
      image: false,
      name: false,
      email: false,
      phone: false,
      password: false,
      confirmPassword: false,
    };


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
    });

    return (
      <div className={`${styles.signup_section}`}>

        <div className={`${styles.flex_container}`}>

          {/* Form */}
          <div className={`${styles.form_container}`}>
            <Formik
              initialValues={{
                image: "",
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
                  Object.assign(signupPayload, values);

                  console.log('print signupPayload value: ' + JSON.stringify(signupPayload));
                  console.log('data from store : \n' + this.props.uname + '\n' + this.props.uemail + '\n' + this.props.uphone + '\n' + this.props.upass + '\n' + this.props.ucpass);

                  if (!formError.name && !formError.email && !formError.phone && !formError.password && !formError.confirmPassword) {
                    console.log('You send data to store! all valadition is completed.');
                  }
                }

              }
            >
              {({ errors, touched }, formik) => (
                <div className={`${styles.main_signup_container}`}>
                  <Form >
                    <h1>Sign up</h1>
                    {/* <UploadImg className={`${styles.profile_photo}`} /> */}

                    <div className={`${imgstyles.upload_img}`}>
                      <Field type='file' name="file" id='profile_img' hidden onChange={(e) => {
                        // setFieldValue('file', e.targat)
                      }} />
                      <label htmlFor='profile_img'>photo +</label>
                    </div>
                    {/* <span className={`${textcss.text_field}`}> <Field name="file" type="file" hidden/> <label>Photo +</label></span><br /> */}


                    <label className={`${textcss.label_css}`}>Name</label><br />
                    <span className={`${textcss.text_field}`}> <Field name="name" type="text" /></span><br />
                    {errors.name && touched.name ? <div className={`${textcss.formik_error}`}>{errors.name} {formError.name = true}</div> : <div> {formError.name = false} </div>}

                    <label className={`${textcss.label_css}`}>Email</label><br />
                    <span className={`${textcss.text_field}`}> <Field name="email" type="text" /></span><br />
                    {errors.email && touched.email ? <div className={`${textcss.formik_error}`}>{errors.email} {formError.email = true}</div> : <div> {formError.email = false} </div>}

                    <label className={`${textcss.label_css}`}>PhoneNo</label><br />
                    <span className={`${textcss.text_field}`}> <Field name="phone" /></span><br />
                    {errors.phone && touched.phone ? <div className={`${textcss.formik_error}`}>{errors.phone} {formError.phone = true}</div> : <div> {formError.phone = false} </div>}

                    <label className={`${textcss.label_css}`}>Password</label><br />
                    <span className={`${textcss.text_field}`}> <Field type="password" name="password" /></span><br />
                    {errors.password && touched.password ? <div className={`${textcss.formik_error}`}>{errors.password} {formError.password = true}</div> : <div> {formError.password = false} </div>}

                    <label className={`${textcss.label_css}`}>ConfirmPassword</label><br />
                    <span className={`${textcss.text_field}`}> <Field type="password" name="confirmPassword" /></span><br />
                    {errors.confirmPassword && touched.confirmPassword ? <div className={`${textcss.formik_error}`}>{errors.confirmPassword} {formError.confirmPassword = true}</div> : <div> {formError.confirmPassword = false} </div>}

                    <button type="submit" className={`${styles.submit_button}`} >Submit</button>
                    {/* <button type="submit"><Link to='/home'>Submit2</Link></button> */}

                    <button type="reset" className={`${styles.reset_button}`} onClick={(data) => {

                      // data = data.initialValues;
                      this.props.clearSignupData();
                      console.log('data from store : \n' + this.props.uname + '\n' + this.props.uemail + '\n' + this.props.uphone + '\n' + this.props.upass + '\n' + this.props.ucpass);
                    }} >Reset</button>

                    <button type='button' className={`${styles.submit_button2}`} onClick={() => {
                      console.log('data from store : \n' + this.props.uname + '\n' + this.props.uemail + '\n' + this.props.uphone + '\n' + this.props.upass + '\n' + this.props.ucpass);
                    }}>get alluser</button>
                    <Link to="/home">go to home</Link>
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