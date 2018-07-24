import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';
import styles from './RegisterComponent.scss';
import Routes from '../../constants';

class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: '', passwordTwo: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static propTypes = {
        registerFunction: PropTypes.func,
        history: PropTypes.object.isRequired
    };

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };
    handleSubmit(event) {
        event.preventDefault();
        this.props.registerFunction(this.state);
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit} className={styles.registerForm}>
                    <label>
                        Login:
                        <p><input
                            type='text'
                            value={this.state.login}
                            onChange={this.handleChange}
                            name='login'/></p>
                    </label>
                    <label>
                        Password:
                        <p><input
                            type='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            name='password'/></p>
                    </label>
                    <label>
                        Password again:
                        <p><input
                            type='password'
                            value={this.state.passwordTwo}
                            onChange={this.handleChange}
                            name='passwordTwo'/></p>
                    </label>
                    <p><input type='submit' value='Submit'/></p>
                </form>
                <Link to={Routes.LOGIN}>
                    <p> Уже есть аккаунт? </p>
                </Link>
            </Fragment>
        );
    }
}

export default withRouter(RegisterComponent);
