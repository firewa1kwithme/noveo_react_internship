import React, {Component} from 'react';
import Button from 'reactstrap/lib/Button';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import AuthWrapperComponent from 'components/auth-wrapper/AuthWrapperComponent';

class LoginComponent extends Component {
    render() {
        return (
            <AuthWrapperComponent
                title={'Project Blog <span>(Login)</span>'}
                linkText='I have to register!'
                linkTo='/register'
            >
                <Form>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='email' name='email' id='email' placeholder='user@example.com'/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password' placeholder='••••••••'/>
                    </FormGroup>
                    <hr/>
                    <Button color='primary' block>Log in</Button>
                </Form>
            </AuthWrapperComponent>
        );
    }
}

export default LoginComponent;
