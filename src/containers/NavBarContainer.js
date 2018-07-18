import React, {Component} from 'react';
import NavBarComponent from '../components/navbar/NavBarComponent.js';
import {connect} from 'react-redux';
import actions from '../ducks/auth/actions';

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
            dispatch(actions.loginAction());
        },
        onLogout: () => {
            dispatch(actions.logoutAction());
        }
    };
}

export const ConnectedNavBarContainer = connect(null, mapDispatchToProps)(NavBarContainer);
