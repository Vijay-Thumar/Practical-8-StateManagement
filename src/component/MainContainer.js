import React from "react";
// import styles from '../component/css/MainContainer.module.css';
// import Signup2 from '../component/Signup2';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from "./Home";
import Signup2 from "../component/Signup2";

class MainContainer extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Signup2/>} />
                    <Route path="/login" element={<Navigate replace to="/"/>} />
                    <Route path='/deshbord' element={<Home/>}/>
                    <Route path='/home' element={<Navigate replace to="/deshbord"/>}/>
                </Routes>
            </Router>
        )
    }
}

export default MainContainer;