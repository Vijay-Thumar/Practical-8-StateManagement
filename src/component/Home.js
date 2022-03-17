import React from "react";
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        return (
            <div>
                User 
                .name:
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
        showtheuser: () => dispatch({ type: 'getallusers' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);