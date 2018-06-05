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

class EditArticleFormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    static propTypes = {
        history: PropTypes.object.isRequired
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

    componentWillUnmount() {
        clearTimeout(this.closeTimeout);
    }

    render() {
        return (
            <Modal isOpen={this.state.isOpen} toggle={() => {
            }}>
                <ModalHeader>Create new article</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for='title'>Title</Label>
                            <Input type='text' name='title' id='title' placeholder='Amazing article title'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='image'>Image URL</Label>
                            <Input type='text' name='image' id='image' placeholder='https://image-url.com'/>
                        </FormGroup>
                        <FormGroup>
                            <Label for='body'>Article text</Label>
                            <Input type='textarea' name='body' id='body' placeholder='Enter your minds to share'/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary'>Do Something</Button>
                    <Button onClick={this._handleCancelClick} color='secondary'>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default EditArticleFormComponent;
