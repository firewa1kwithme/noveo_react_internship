import React, {Component, Fragment} from 'react';
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

    // fetchUser = () => {
    //     return {
    //         username: 'Rick'
    //     };
    // };
    // componentDidMount() {
    //     this.setState({
    //         user: this.fetchUser()
    //     });
    // }
    render() {
        return (
            <NavBarComponent username={this.props.username} onLogin={this.props.onLogin}
                onLogout={this.props.onLogout}/>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//         username: state
//     };
// }

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
