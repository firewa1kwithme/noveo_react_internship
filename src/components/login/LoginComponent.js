import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './LoginComponent.scss';
import {withRouter, Link} from 'react-router-dom';
import Routes from '../../constants';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        loginFunction: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        error: PropTypes.object
    };

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.loginFunction(this.state);
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit} className={styles.loginForm}>
                    <label>
                        Username:
                        <p><input type='text' value={this.state.username} onChange={this.handleChange} name='login'/>
                        </p>
                    </label>
                    <label>
                        Password:
                        <p><input type='password' value={this.state.password} onChange={this.handleChange}
                            name='password'/></p>
                    </label>
                    <p><input type='submit' value='Submit'/></p>
                    <p>{this.props.error}</p>
                </form>
                <Link to={Routes.REGISTER}>
                    <p className={styles.redirectRegister}> Нет аккаунта? </p>
                </Link>
            </Fragment>
        );
    }
}

export default withRouter(LoginComponent);
