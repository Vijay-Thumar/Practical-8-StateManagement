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
            ...action.payload,
            // name: action.payload.name,
            // email: action.payload.email,
            // phone: action.payload.phone,
            // password: action.payload.password,
            // confirmPassword: action.payload.confirmPassword,
        }
    }

    if (action.type === "clear") {
        return {
            ...state,
            ...defaultState
            // name: '',
            // email: '',
            // phone: '',
            // password: '',
            // confirmPassword: '',
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