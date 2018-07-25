import React, {Component} from 'react';
import NavBarComponent from '../components/navbar/NavBarComponent.js';
import {connect} from 'react-redux';
import actions from '../ducks/app/actions';
import PropTypes from 'prop-types';
import {selectUser} from '../ducks/auth/selectors';

class NavBarContainer extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        onLogout: PropTypes.func.isRequired,
        onLogin: PropTypes.func.isRequired
    };

    render() {
        return (
            <NavBarComponent
                user={this.props.user}
                onLogin={this.props.onLogin}
                onLogout={this.props.onLogout}
            />
        );
    }
}

export default connect(
    (state) => ({
        user: selectUser(state)
    }),
    {
        onLogin: actions.loginAction,
        onLogout: actions.logoutAction
    })(NavBarContainer);
