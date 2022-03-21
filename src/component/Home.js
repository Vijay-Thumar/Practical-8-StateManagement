import React from "react";
import { connect } from 'react-redux';
import homecss from './css/Home.module.css';
import { Link } from "react-router-dom";
// import { Redirect } from 'react-router'

class Home extends React.Component {
    goToHomePage() {
        console.log('this is delayed call')
    }
    render() {

        return (
            <div>
                <div className={`${homecss.Home}`}>
                    <div>
                        <h2 className={`${homecss.login_header}`}>Login Page</h2>
                    </div>
                    {this.props.uname ?

                        <Link to="/">
                            <button className={`${homecss.logout_button}`} onClick={() => {
                                this.props.clearSignupData();
                                console.log('clicked on button');
                            }}>Logout</button>
                        </Link>
                        :
                        <Link to="/">
                            <button className={`${homecss.logout_button}`} >Goto Signup</button>
                        </Link>
                    }
                </div>
                <br />
                {this.props.uname ?

                    <div>
                        <span>User name:</span>
                        <h1>{this.props.uname}</h1>
                        User email:
                        <h1>{this.props.uname}</h1>
                        User phone:
                        <h1>{this.props.uname}</h1>
                    </div>

                    :
                    <div>
                        No data available please signup
                    </div>

                }


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        uname: state.name,
        uemail: state.email,
        uphone: state.phone,
        upass: state.password,
        ucpass: state.confirmPassword,
        allusers: state.allUsers,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearSignupData: () => dispatch({ type: 'clear' }),
        getAllUsers: () => dispatch({ type: 'getallusers' })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);