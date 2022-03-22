import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

const defaultState = {
    image: null,
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
}

const signupReducer = ( state = defaultState , action) => {
    
    if (action.type === 'storeSignupData') {
        return {
            ...state,
            ...action.payload,
            
        }
    }

    if (action.type === "clear") {
        return {
            ...state,
            ...defaultState
        }
    }

    if (action.type === "getallusers") {
        return {
            ...state,
        }
    }

    return state;
}

const store = createStore(signupReducer);
// export const store = createStore(rootReducer, {}, composeWithDevTools());

export default store;