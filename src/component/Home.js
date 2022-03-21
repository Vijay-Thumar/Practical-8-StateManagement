import React from "react";
import { connect } from 'react-redux';
import homecss from './css/Home.module.css';
import { Link } from "react-router-dom";
class Home extends React.Component {
    onClickLogoutHandler() {
        this.props.clearUserData();
        console.log('clicked on button');
    };

    render() {
        return (
            <div>
                <div className={`${homecss.Home}`}>
                    <div>
                        <h2>Login Page</h2>
                    </div>
                    <button className={`${homecss.logout_button}`} onClick={this.onClickLogoutHandler}><Link to="/"></Link> Logout</button>
                </div>
                <br />
                User name:
                <h1>{this.props.uname}</h1>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        uname: state.name
    };
}
const mapDispatchToProps = dispatch => {
    return {
        clearUserData: () => dispatch({ type: 'clear' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);