import React from 'react';
import styles from './css/TextField.module.css'
import { ErrorMessage} from 'formik';
import {Input} from 'antd';


class TextField extends React.Component {
    

render() {
    return(
        <div className={`${styles.text_field}`}>
            <label htmlFor={this.props.name}>{this.props.label}</label>
            <br/>
            <Input autoComplete='off' {...this.props.field} {...this.props.label}></Input>
            <br/>
           
            <div className={`${styles.formik_error}`}>
            <ErrorMessage name={this.props.name} />
            </div>
        </div>
    );
}
}

export default TextField;