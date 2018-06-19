import React, {Component} from 'react';
import Alert from 'reactstrap/lib/Alert';
import locale from 'locale.js';

export default class AuthFormComponent extends Component {
    constructor(props, defaultFormState) {
        super(props);

        this.state = {
            errorMessage: null,
            isFormSubmitted: false,
            isLocalError: false,
            form: defaultFormState
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (state.isLocalError) {
            return {
                ...state,
                isLocalError: false
            };
        }

        return {
            ...state,
            errorMessage: locale.ERRORS[props.errorCode] || null
        };
    }

    /**
     * Renders current errors
     *
     * @return {null|ReactElement}
     */
    renderErrorMessages = () => {
        const showAlertMessage = this.state.isFormSubmitted && this.state.errorMessage;

        return showAlertMessage ? (
            <Alert color='danger'>
                {this.state.errorMessage}
            </Alert>
        ) : null;
    };

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
     */
    handleFieldChange = (e) => {
        const {name, value} = e.target;

        return this.setState((prevState) => {
            return {
                errorMessage: null,
                isLocalError: true,
                isFormSubmitted: false,
                form: {
                    ...prevState.form,
                    [name]: value.trim()
                }
            };
        });
    };
}
