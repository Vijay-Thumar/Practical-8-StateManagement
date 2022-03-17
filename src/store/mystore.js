import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";




const defaultState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
}

const signupReducer = (
    state = defaultState , action) => {

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
            // name: '',
            // email: '',
            // phone: '',
            // password: '',
            // confirmPassword: '',
            ...defaultState
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



const store = createStore(signupReducer, {}, composeWithDevTools());
// export const store = createStore(rootReducer, {}, composeWithDevTools());


export default store;