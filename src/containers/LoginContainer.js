import React, {Component} from 'react';
import LoginComponent from '../components/login/LoginComponent.js';
import actions from '../ducks/app/actions';
import {connect} from 'react-redux';
import {selectLoginInfo} from '../ducks/auth/selectors';
import PropTypes from 'prop-types';

class LoginContainer extends Component {
    static propTypes = {
        onLogin: PropTypes.func.isRequired,
        loginInfo: PropTypes.object.isRequired
    };
    loginFunction = ({login, password}) => {
        this.props.onLogin(login, password);
    };

    render() {
        return (
            <LoginComponent loginFunction={this.loginFunction} error={this.props.loginInfo.error}/>
        );
    }
}

export default connect(
    (state) => ({
        loginInfo: selectLoginInfo(state)
    }), {
        onLogin: actions.loginAction
    }
)(LoginContainer);
