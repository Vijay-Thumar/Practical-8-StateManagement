import styles from './css/TextField.module.css';
import { ErrorMessage, useField} from 'formik';

function TextField ({ label, ...props}) {
    const [field, meta] = useField(props);
    console.log(field,meta)
    return(
        <div className={`${styles.text_field}`}>
            <label htmlFor={field.name}> {label} </label><br/>
            <input type="text" autoComplete='off'
            {...field} {...props.label}
            /><br/>
            <ErrorMessage name={field.name} />
        </div>
    )
}

export default TextField;