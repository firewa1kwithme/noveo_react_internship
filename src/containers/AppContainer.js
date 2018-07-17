import React, {Component} from 'react';
import {connect} from 'react-redux';

import AppComponent from '../components/AppComponent.js';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        console.log(this.props);
        return (
            <AppComponent isAuthenticated={this.props.username !== ''}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        username: state
    };
}

import {loginAction, logoutAction} from '../redux/actions';
export const ConnectedAppContainer = connect(mapStateToProps)(AppContainer);
