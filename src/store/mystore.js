import { createStore } from 'redux';

const defaultState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
}

const signupReducer = (
    state = { defaultState }, action) => {

    if (action.type === 'storeSignupData') {
        return {
            ...state,
            // name: action.payload.name,
            // email: action.payload.email,
            // phone: action.payload.phone,
            // password: action.payload.password,
            // confirmPassword: action.payload.confirmPassword,
            ...action.payload,
            

        }
    }

    if (action.type === "clear") {
        return {
            ...state,
            name: 'clear',
            email: 'clear',
            phone: 'clear',
            password: 'clear',
            confirmPassword: 'clear',
        }
    }
    if (action.type === "getallusers") {
        return {
            name: state.name,
            email: state.email,
            phone: state.phone,
            password: state.password,
            confirmPassword: state.confirmPassword,
        }
    }

    return state;
}



const store = createStore(signupReducer);

export default store;