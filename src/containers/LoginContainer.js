import React, {Component} from 'react';
import LoginComponent from '../components/login/LoginComponent.js';
import actions from '../ducks/auth/actions';
import {connect} from 'react-redux';
import {selectLoginInfo} from '../ducks/auth/selectors';

class LoginContainer extends Component {
    loginFunction = ({login, password}) => {
        // console.log('**** loginFunction. Form parameters: ', login, password);
        this.props.onLogin(login, password);
    };

    render() {
        return (
            <LoginComponent loginFunction={this.loginFunction} error={this.props.loginInfo.error}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        loginInfo: selectLoginInfo(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin: (login, password) => {
            dispatch(actions.loginAction(login, password));
        }
    };
}

export const ConnectedLoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
