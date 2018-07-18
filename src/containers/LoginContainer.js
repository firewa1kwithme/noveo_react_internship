import React, {Component} from 'react';
import LoginComponent from '../components/login/LoginComponent.js';
import actions from '../ducks/auth/actions';
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

import {selectUsername} from '../selectors';

function mapStateToProps(state) {
    return {
        username: selectUsername(state)
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
