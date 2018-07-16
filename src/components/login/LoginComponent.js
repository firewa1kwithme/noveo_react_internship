import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './LoginComponent.scss';
import {Link, withRouter} from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static propTypes = {
        loginFunction: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired
    };

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.loginFunction(this.state);
    }

    redirectRegister = () => {
        this.props.history.push('/register');
    };

    render() {
        console.log('Component ');
        console.log(this.props);
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit} className={styles.loginForm}>
                    <label className={styles.loginLabel}>
                        Login:
                        <p><input type='text' value={this.state.login} onChange={this.handleChange} name='login'/></p>
                    </label>
                    <label className={styles.passwordLabel}>
                        Password:
                        <p><input type='password' value={this.state.password} onChange={this.handleChange}
                                  name='password'/></p>
                    </label>
                    <p><input type='submit' value='Submit' className={styles.submitButton}/></p>
                </form>
                {/*<Link to='/register'> Нет аккаунта? </Link>*/}
                <p onClick={this.redirectRegister}> Нет аккаунта? </p>
            </Fragment>
        );
    }
}

export default withRouter(LoginComponent);
