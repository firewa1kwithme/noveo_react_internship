import React, {Component} from 'react';
import LoginComponent from '../components/login/LoginComponent.js';
import {loginAction, logoutAction} from '../redux/actions';
import {connect} from 'react-redux';

class LoginContainer extends Component {
    login = ({login, password}) => {
        console.log('Form parameters: ', login, password);
        this.props.onLogin(login, password);
    };

    render() {
        console.log('Container ');
        console.log(this.props);
        return (
            <LoginComponent loginFunction={this.login}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        username: state
    };
}


function mapDispatchToProps(dispatch) {
    return {
        onLogin: (login, password) => {
            dispatch(loginAction(login));
        }
    };
}

export const ConnectedLoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
