import { createStore } from 'redux';

const signupData = (state = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
} , action ) => {
    if(action.type === 'storeTheData'){
        return {
            
        }
    }
}