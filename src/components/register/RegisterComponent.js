import React, {Component} from 'react';
import PropTypes from 'prop-types';
//TODO: если логин занят, если пароли не совпадают
export default class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: '', passwordTwo: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static propTypes = {
        registerFunction: PropTypes.func.isRequired
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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Login:
                    <input
                        type='text'
                        value={this.state.login}
                        onChange={this.handleChange}
                        name='login'/>
                </label>
                <label>
                    Password:
                    <input
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        name='password'/>
                </label>
                <label>
                    Please, enter password again:
                    <input
                        type='password'
                        value={this.state.passwordTwo}
                        onChange={this.handleChange}
                        name='passwordTwo'/>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        );
    }
}
