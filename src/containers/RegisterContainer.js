import React, {Component} from 'react';
import RegisterComponent from '../components/register/RegisterComponent';

export default class RegisterContainer extends Component {
    register = ({login, password, passwordTwo}) => {
        if (password === passwordTwo) {
            console.log('Form parameters: ', login, password);
        } else {
            console.log('Sorry, password didn`t require');
        }
    };
    render() {
        return (
            <RegisterComponent registerFunction={this.register}/>
        );
    }
}
