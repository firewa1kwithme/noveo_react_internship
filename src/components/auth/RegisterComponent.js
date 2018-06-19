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

class RegisterComponent extends AuthFormComponent {
    constructor(props) {
        const defaultFormState = {
            username: '',
            password: '',
            repeatPassword: ''
        };

        super(props, defaultFormState);
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        error: PropTypes.object
    };

    /**
     * Handle form submit
     * Current _handleSubmit method implementation
     * Is not really production ready,
     * You must use form libraries or self written libraries
     * In order to handle submit action
     *
     * @param {Event} e
     * @return {undefined}
     * @private
     */
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

        if (form.password !== form.repeatPassword) {
            return this.setState({
                isFormSubmitted: true,
                errorMessage: locale.ERRORSREPEAT_PASSWORD_ERROR,
                isLocalError: true
            });
        }

        return this.setState({
            isFormSubmitted: true
        }, () => {
            return this.props.register({
                username: form.username,
                password: form.password
            });
        });
    };

    render() {
        return (
            <AuthWrapperComponent
                title={locale.AUTH.REGISTER_TITLE}
                linkText={locale.AUTH.GO_TO_LOGIN}
                linkTo={Routes.LOGIN}
            >
                <Form noValidate onSubmit={this._handleSubmit}>
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
                            placeholder={locale.AUTH.USERNAME_PLACEHOLDER}
                            value={this.state.password}
                            onChange={this.handleFieldChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for='repeatPassword'>{locale.AUTH.REPEAT_PASSWORD_LABEL}</Label>
                        <Input
                            type='password'
                            name='repeatPassword'
                            id='repeatPassword'
                            placeholder={locale.AUTH.REPEAT_PASSWORD_PLACEHOLDER}
                            value={this.state.repeatPassword}
                            onChange={this.handleFieldChange}
                        />
                    </FormGroup>
                    {this.renderErrorMessages()}
                    <hr/>
                    <Button color='primary' block>{locale.AUTH.REGISTER_SUBMIT_BUTTON}</Button>
                </Form>
            </AuthWrapperComponent>
        );
    }
}

export default RegisterComponent;
