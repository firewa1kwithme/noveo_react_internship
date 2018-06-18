import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import ModalBody from 'reactstrap/lib/ModalBody';
import ModalFooter from 'reactstrap/lib/ModalFooter';
import Button from 'reactstrap/lib/Button';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import Alert from 'reactstrap/lib/Alert';
import locale from 'locale.js';

class EditArticleFormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
            errorMessage: null,
            form: {
                title: '',
                imageUrl: '',
                content: ''
            }
        };
    }

    static propTypes = {
        history: PropTypes.object.isRequired,
        createNewArticle: PropTypes.func.isRequired
    };

    _handleCancelClick = () => {
        this.setState({
            isOpen: false
        }, () => {
            this.closeTimeout = setTimeout(() => {
                this.props.history.push('/feed');
            }, 300);
        });
    };

    /**
     * @param {Event} e
     * @returns {undefined|*}
     * @private
     */
    _handleSubmit = (e) => {
        e.preventDefault();

        const {form} = this.state;

        for (let key in form) {
            if (form.hasOwnProperty(key) && !form[key]) {
                return this.setState({
                    errorMessage: locale.errors.EMPTY_FIELDS
                });
            }
        }

        return this.props.createNewArticle(this.state.form);
    };

    /**
     * @param {Event} e
     * @return {undefined|*}
     * @private
     */
    _handleInputChange = (e) => {
        const {name, value} = e.target;

        return this.setState((prevState) => {
            return {
                errorMessage: null,
                form: {
                    ...prevState.form,
                    [name]: value.trim()
                }
            };
        });
    };

    componentWillUnmount() {
        clearTimeout(this.closeTimeout);
    }

    render() {
        return (
            <Modal isOpen={this.state.isOpen} toggle={() => {
            }}>
                <ModalHeader>Create new article</ModalHeader>
                <Form noValidate onSubmit={this._handleSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for='title'>Title</Label>
                            <Input
                                type='text'
                                name='title'
                                id='title'
                                placeholder='Amazing article title'
                                onChange={this._handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='imageUrl'>Image URL</Label>
                            <Input
                                type='text'
                                name='imageUrl'
                                id='imageUrl'
                                placeholder='https://image-url.com'
                                onChange={this._handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='content'>Article text</Label>
                            <Input
                                type='textarea'
                                name='content'
                                id='content'
                                placeholder='Enter your minds to share'
                                onChange={this._handleInputChange}
                            />
                        </FormGroup>
                        {this.state.errorMessage && <Alert color='danger'>{this.state.errorMessage}</Alert>}
                    </ModalBody>
                    <ModalFooter>
                        <Button type='submit' color='primary'>Create</Button>
                        <Button type='button' onClick={this._handleCancelClick} color='secondary'>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        );
    }
}

export default EditArticleFormComponent;
