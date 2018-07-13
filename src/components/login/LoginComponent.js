import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './LoginComponent.scss';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static propTypes = {
        loginFunction: PropTypes.func.isRequired
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
            <form onSubmit={this.handleSubmit} className={styles.loginForm}>
                <label className={styles.loginLabel}>
                    Login:
                    <input type='text' value={this.state.login} onChange={this.handleChange} name='login'/>
                </label>
                <label className={styles.passwordLabel}>
                    Password:
                    <input type='password' value={this.state.password} onChange={this.handleChange} name='password'/>
                </label>
                <input type='submit' value='Submit' className={styles.submitButton}/>
            </form>
        );
    }
}
