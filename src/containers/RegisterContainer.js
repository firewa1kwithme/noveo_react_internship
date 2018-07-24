import React, {Component} from 'react';
import RegisterComponent from '../components/register/RegisterComponent';
import {connect} from 'react-redux';
import actions from '../ducks/app/actions';
import {selectUser} from '../ducks/auth/selectors';
import PropTypes from 'prop-types';

class RegisterContainer extends Component {
    static propTypes = {
        onRegister: PropTypes.func
    };
    register = ({login, password, passwordTwo}) => {
        if (password === passwordTwo) {
            this.props.onRegister(login, password);
        } else {
            return 'Sorry, password didn`t match';
        }
    };

    render() {
        return (
            <RegisterComponent registerFunction={this.register}/>
        );
    }
}

export default connect((state) => {
    return {
        username: selectUser(state)
    };
},
(dispatch) => {
    return {
        onRegister: (login, password) => {
            dispatch(actions.registerAction(login, password));
        }
    };
})(RegisterContainer);
