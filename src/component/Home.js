import React from "react";
import { connect } from 'react-redux';
import homecss from './css/Home.module.css';
import { Link, Navigate } from "react-router-dom";

class Home extends React.Component {
    goToHomePage() {
        console.log('Signup first')
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
                        <div>
                            <Navigate to='/' />
                        </div>
                    }
                </div>
                <br />
                {this.props.uname ?

                    <div>
                        <span>User image:</span>
                        <h1>{this.props.uimage}</h1>
                        <img src={this.props.uimage} alt='User image'></img>
                        <span>User name:</span>
                        <h1>{this.props.uname}</h1>
                        User email:
                        <h1>{this.props.uemail}</h1>
                        User phone:
                        <h1>{this.props.uphone}</h1>
                    </div>
                    :
                    <div>
                        No data available please signup
                        {this.goToHomePage()}
                    </div>
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        uimage: state.image,
        uname: state.name,
        uemail: state.email,
        uphone: state.phone,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearSignupData: () => dispatch({ type: 'clear' }),
        getAllUsers: () => dispatch({ type: 'getallusers' })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);