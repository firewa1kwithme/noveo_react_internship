import React, {Component} from 'react';
import LoginComponent from '../components/login/LoginComponent.js';

export default class LoginContainer extends Component {
    login = ({login, password}) => {
        console.log('Form parameters: ', login, password);
    };
    render() {
        return (
            <LoginComponent loginFunction={this.login}/>
        );
    }
}
