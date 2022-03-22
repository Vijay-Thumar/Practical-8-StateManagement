import React from "react";
import { connect } from 'react-redux';
import homecss from './css/Home.module.css';
import { Link, Navigate } from "react-router-dom";

class Home extends React.Component {
    goToHomePage() {
        console.log('Signup first');    
    }
    render() {

        return (
            <div>
                {/* Nav bar with logout and login conditionaly */}
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

                    <div className={`${homecss.flex_container}`}>

                        <div className={`${homecss.flex_div1}`}>
                            <b>User image:</b><br />
                            <img className={`${homecss.user_image}`} src={this.props.uimage} alt='User image'></img><br />
                        </div>

                        <div className={`${homecss.flex_div2}`}>
                            <b>User name:</b>
                            <h4><i><u>{this.props.uname}</u></i></h4>

                            <b>User email:</b>
                            <h4><i><u>{this.props.uemail}</u></i></h4>

                            <b>User Phone:</b>
                            <h4><i><u>{this.props.uphone}</u></i></h4>
                        </div>

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
        // getAllUsers: () => dispatch({ type: 'getallusers' })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);