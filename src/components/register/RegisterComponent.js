import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import Form from 'reactstrap/lib/Form';
import Alert from 'reactstrap/lib/Alert';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import AuthWrapperComponent from 'components/auth-wrapper/AuthWrapperComponent';
import locale from 'locale.js';

class RegisterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: null,
            isFormSubmitted: false,
            form: {
                username: '',
                password: '',
                repeatPassword: ''
            }
        };
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        error: PropTypes.object
    };

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            errorMessage: locale.errors[props.errorCode]
        };
    }

    /**
     * Handle field value change
     * Note: you must handle nested state properly
     *
     * @param {Event} e
     * @param {Object} e.target
     * @param {string} e.target.name
     * @param {string} e.target.value
     *
     * @return {undefined|*}
     * @private
     */
    _handleFieldChange = (e) => {
        const {name, value} = e.target;

        return this.setState((prevState) => {
            return {
                errorMessage: null,
                isFormSubmitted: false,
                form: {
                    ...prevState.form,
                    [name]: value.trim()
                }
            };
        });
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
     *
     * @return {undefined|*}
     * @private
     */
    _handleSubmit = (e) => {
        e.preventDefault();

        const {form} = this.state;

        for (let key in form) {
            if (form.hasOwnProperty(key) && !form[key]) {
                return this.setState({
                    isFormSubmitted: true,
                    errorMessage: locale.errors.EMPTY_FIELDS
                });
            }
        }

        if (form.password !== form.repeatPassword) {
            return this.setState({
                isFormSubmitted: true,
                errorMessage: locale.errors.REPEAT_PASSWORD_ERROR
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

        return;
    };

    render() {
        const showAlertMessage = this.state.isFormSubmitted && this.state.errorMessage;
        const alertMessage = showAlertMessage
            ? <Alert color='danger'>
                {this.state.errorMessage}
            </Alert>
            : null;

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
                            onChange={this._handleFieldChange}
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
                            onChange={this._handleFieldChange}
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
                            onChange={this._handleFieldChange}
                        />
                    </FormGroup>
                    {alertMessage}
                    <hr/>
                    <Button color='primary' block>Register</Button>
                </Form>
            </AuthWrapperComponent>
        );
    }
}

export default RegisterComponent;
