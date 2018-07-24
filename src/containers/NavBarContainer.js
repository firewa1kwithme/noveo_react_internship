import React, {Component} from 'react';
import NavBarComponent from '../components/navbar/NavBarComponent.js';
import {connect} from 'react-redux';
import actions from '../ducks/app/actions';
import PropTypes from 'prop-types';

class NavBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: ''
            }
        };
    }

    static propTypes = {
        username: PropTypes.string,
        onLogout: PropTypes.func,
        onLogin: PropTypes.func
    };

    render() {
        return (
            <NavBarComponent username={this.props.username} onLogin={this.props.onLogin}
                onLogout={this.props.onLogout}/>
        );
    }
}

export default connect(
    null,
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
