import React from 'react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import AuthWrapperComponent from 'components/auth-wrapper/AuthWrapperComponent';
import AuthFormComponent from 'components/auth-form/AuthFormComponent';
import locale from 'locale.js';

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
                    errorMessage: locale.errors.EMPTY_FIELDS,
                    isLocalError: true
                });
            }
        }

        if (form.password !== form.repeatPassword) {
            return this.setState({
                isFormSubmitted: true,
                errorMessage: locale.errors.REPEAT_PASSWORD_ERROR,
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
                title={'Project Blog <span>(Register)</span>'}
                linkText='I already have an account!'
                linkTo='/login'
            >
                <Form noValidate onSubmit={this._handleSubmit}>
                    <FormGroup>
                        <Label for='username'>Username</Label>
                        <Input
                            type='text'
                            name='username'
                            id='username'
                            placeholder='super-user-777'
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
                    <FormGroup>
                        <Label for='repeatPassword'>Repeat password</Label>
                        <Input
                            type='password'
                            name='repeatPassword'
                            id='repeatPassword'
                            placeholder='••••••••'
                            value={this.state.repeatPassword}
                            onChange={this.handleFieldChange}
                        />
                    </FormGroup>
                    {this.renderErrorMessages()}
                    <hr/>
                    <Button color='primary' block>Register</Button>
                </Form>
            </AuthWrapperComponent>
        );
    }
}

export default RegisterComponent;
