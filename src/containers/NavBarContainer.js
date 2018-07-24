import React, {Component} from 'react';
import NavBarComponent from '../components/navbar/NavBarComponent.js';
import {connect} from 'react-redux';
import actions from '../ducks/app/actions';
import PropTypes from 'prop-types';
import {selectUser} from '../ducks/auth/selectors';

class NavBarContainer extends Component {

    static propTypes = {
        user: PropTypes.object,
        onLogout: PropTypes.func,
        onLogin: PropTypes.func
    };

    render() {
        return (
            <NavBarComponent user={this.props.user} onLogin={this.props.onLogin}
                onLogout={this.props.onLogout}/>
        );
    }
}

export default connect(
    (state) => ({
        user: selectUser(state)
    }),
    (dispatch) => {
        return {
            onLogin: () => {
                dispatch(actions.loginAction());
            },
            onLogout: () => {
                dispatch(actions.logoutAction());
            }
        };
    })(NavBarContainer);
