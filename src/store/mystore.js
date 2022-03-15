import { createStore } from 'redux';

const defaultState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    allUsers: [
        {
            key: 1,
            name: "neha",
            email: "nehaparmar@gmail.com",
            phone: "1235698407",
            password: "125",
            confirmPassword: "125",
        },
        {
            key: 2,
            name: "niral",
            email: "njrocks@gmail.com",
            phone: "8306826600",
            password: "detko",
            confirmPassword: "detko",
        },
    ]
}





const signupReducer = (
    state = { defaultState }, action) => {

    if (action.type === 'storeSignupData') {
        return {
            ...state,
            name: action.payload.name,
            email: action.payload.email,
            phone: action.payload.phone,
            password: action.payload.password,
            confirmPassword: action.payload.confirmPassword,


        }
    }

    if (action.type === "clear") {
        return {
            ...state,
            allUsers: JSON.parse(defaultState.allUsers),
            name: 'clear',
            email: 'clear',
            phone: 'clear',
            password: 'clear',
            confirmPassword: 'clear',
        }
    }
    if (action.type === "getallusers") {
        return {
            allUsers: defaultState.allUsers,
        }
    }

    return state;
}



const store = createStore(signupReducer);

export default store;