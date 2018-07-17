import React, {Component} from 'react';
import NavBarComponent from '../components/navbar/NavBarComponent.js';
import {connect} from 'react-redux';
import {loginAction, logoutAction} from '../redux/actions';

class NavBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: ''
            }
        };
    }

    render() {
        return (
            <NavBarComponent username={this.props.username} onLogin={this.props.onLogin}
                onLogout={this.props.onLogout}/>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin: () => {
            dispatch(loginAction());
        },
        onLogout: () => {
            dispatch(logoutAction());
        }
    };
}

export const ConnectedNavBarContainer = connect(null, mapDispatchToProps)(NavBarContainer);
