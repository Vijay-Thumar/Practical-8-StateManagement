import styles from './css/TextField.module.css';
import { ErrorMessage, useField} from 'formik';
import {Input} from 'antd';

function TextField ({ label, ...props}) {
    const [field, meta] = useField(props);
    console.log(field,meta)
    return(
        <div className={`${styles.text_field}`}>

            <label htmlFor={field.name}> {label} </label>
            <br/>

            <Input 
            // placeholder={`Enter ${label}`} 
            autoComplete='off' 
            {...field} {...props.label} />

            
            {/* <br/> */}
            {/* <input type="text" autoComplete='off' {...field} {...props.label} /> */}
            <br/>
            
            {/* Erro message */}
            <div className={`${styles.formik_error}`}>
            <ErrorMessage name={field.name} ></ErrorMessage>
            </div>
            
        </div>
    )
}

export default TextField;