import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import AuthWrapperComponent from 'components/auth-wrapper/AuthWrapperComponent';
import AuthFormComponent from 'components/auth-form/AuthFormComponent';
import locale from 'locale.js';

class LoginComponent extends AuthFormComponent {
    constructor(props) {
        const defaultFormState = {
            username: '',
            password: ''
        };

        super(props, defaultFormState);
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        error: PropTypes.object
    };

    _handleSubmit = (e) => {
        e.preventDefault();

        const {form} = this.state;

        for (let key in form) {
            if (form.hasOwnProperty(key) && !form[key]) {
                return this.setState({
                    isFormSubmitted: true,
                    errorMessage: locale.errors.EMPTY_FIELDS,
                    isLocalError: true
                });
            }
        }

        return this.setState({
            isFormSubmitted: true
        }, () => {
            return this.props.login({
                username: form.username,
                password: form.password
            });
        });
    };

    render() {
        return (
            <AuthWrapperComponent
                title={'Project Blog <span>(Login)</span>'}
                linkText='I have to register!'
                linkTo='/register'
            >
                <Form onSubmit={this._handleSubmit} noValidate>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input
                            type='text'
                            name='username'
                            id='username'
                            placeholder='user@example.com'
                            value={this.state.username}
                            onChange={this.handleFieldChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='••••••••'
                            value={this.state.password}
                            onChange={this.handleFieldChange}
                        />
                    </FormGroup>
                    {this.renderErrorMessages()}
                    <hr/>
                    <Button color='primary' block>Log in</Button>
                </Form>
            </AuthWrapperComponent>
        );
    }
}

export default LoginComponent;
