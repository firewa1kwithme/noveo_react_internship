import React, {Component} from 'react';
import RegisterComponent from '../components/register/RegisterComponent';
import {connect} from 'react-redux';
import actions from '../ducks/auth/actions';
import {selectUsername} from '../selectors';

class RegisterContainer extends Component {
    register = ({login, password, passwordTwo}) => {
        if (password === passwordTwo) {
            console.log('Form parameters: ', login, password);
            this.props.onLogin(login, password);
        } else {
            console.log('Sorry, password didn`t require');
        }
    };
    render() {
        return (
            <RegisterComponent registerFunction={this.register}/>
        );
    }
}

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

export const ConnectedRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
