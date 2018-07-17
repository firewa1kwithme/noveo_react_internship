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

import {selectUsername} from '../redux/selectors';

function mapStateToProps(state) {
    return {
        username: selectUsername(state)
    };
}

export const ConnectedAppContainer = connect(mapStateToProps)(AppContainer);
