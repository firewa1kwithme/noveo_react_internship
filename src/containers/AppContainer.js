import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectLoginInfo} from '../ducks/auth/selectors';
import AppComponent from '../components/AppComponent.js';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <AppComponent isAuthenticated={this.props.login.isAuthenticated} error={this.props.login.error}/>
        );
    }
}

export const ConnectedAppContainer = compose(withRouter, connect((state) => {
    return {
        login: selectLoginInfo(state)
    };
}))(AppContainer);
