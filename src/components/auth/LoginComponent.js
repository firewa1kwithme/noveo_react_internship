import React from 'react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import AuthWrapperComponent from 'components/auth/auth-wrapper/AuthWrapperComponent';
import AuthFormComponent from 'components/auth/AuthFormComponent';
import locale from 'locale.js';
import {Routes} from 'constants.js';

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
                    errorMessage: locale.ERRORSEMPTY_FIELDS,
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
                title={locale.AUTH.LOGIN_TITLE}
                linkText={locale.AUTH.GO_TO_REGISTER}
                linkTo={Routes.REGISTER}
            >
                <Form onSubmit={this._handleSubmit} noValidate>
                    <FormGroup>
                        <Label for='username'>{locale.AUTH.USERNAME_LABEL}</Label>
                        <Input
                            type='text'
                            name='username'
                            id='username'
                            placeholder={locale.AUTH.USERNAME_PLACEHOLDER}
                            value={this.state.username}
                            onChange={this.handleFieldChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>{locale.AUTH.PASSWORD_LABEL}</Label>
                        <Input
                            type='password'
                            name='password'
                            id='password'
                            placeholder={locale.AUTH.PASSWORD_PLACEHOLDER}
                            value={this.state.password}
                            onChange={this.handleFieldChange}
                        />
                    </FormGroup>
                    {this.renderErrorMessages()}
                    <hr/>
                    <Button color='primary' block>{locale.AUTH.LOGIN_SUBMIT_BUTTON}</Button>
                </Form>
            </AuthWrapperComponent>
        );
    }
}

export default LoginComponent;
