import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectLoginInfo} from '../ducks/auth/selectors';
import {selectIsInit} from '../ducks/app/selectors';
import AppComponent from '../components/AppComponent.js';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class AppContainer extends Component {
    static propTypes ={
        login: PropTypes.object,
        isInit: PropTypes.bool
    };
    render() {
        return (
            <AppComponent isAuthenticated={this.props.login.isAuthenticated} error={this.props.login.error}
                isInit={this.props.isInit}/>
        );
    }
}

export default compose(withRouter, connect((state) => {
    return {
        login: selectLoginInfo(state),
        isInit: selectIsInit(state)
    };
}))(AppContainer);
