import React, {Component, Fragment} from 'react';
import Alert from 'reactstrap/lib/Alert';
import locale from 'locale.js';

export default class AuthFormComponent extends Component {
    constructor(props, defaultFormState) {
        super(props);

        this.state = {
            errorMessages: [],
            isFormSubmitted: false,
            isLocalError: false,
            form: defaultFormState
        };
    }

    static getDerivedStateFromProps(props, state) {
        // local error was set, don't rewrite it by error from props i it exists
        if (state.isLocalError) {
            return {
                ...state,
                isLocalError: false
            };
        }

        if (props.errorCode) {
            return {
                ...state,
                errorMessages: AuthFormComponent.getErrorMessagesByCodes(props.errorCode)
            };
        }

        return null;
    }

    /**
     * Generate errors output for errors got from server
     * @param {Object} errorCodes
     * @returns {Array}
     */
    static getErrorMessagesByCodes(error) {
        switch (true) {
            case typeof error === 'string':
                return [locale.errors[error]];
            case typeof error === 'object':
                return Object.keys(error).map(field => {
                    const errorCode = error[field][0];
                    const fieldUpperCase = field.toUpperCase();

                    return locale.errors[`${fieldUpperCase}_${errorCode}`];
                });
        }
    }

    /**
     * Renders current errors
     *
     * @returns {boolean|XML}
     */
    renderErrorMessages = () => {
        const showAlertMessage = this.state.isFormSubmitted && this.state.errorMessages.length > 0;
        return showAlertMessage && (
            <Alert color='danger'>
                {this.state.errorMessages.map((errorMessage, index) => {
                    return (
                        <Fragment key={index}>
                            {errorMessage} <br/>
                        </Fragment>
                    );
                })}
            </Alert>);
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
                errorMessages: [],
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
