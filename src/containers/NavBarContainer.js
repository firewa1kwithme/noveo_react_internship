import React, {Component, Fragment} from 'react';
import NavBarComponent from '../components/navbar/NavBarComponent.js';

export default class NavBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    fetchUser = () => {
        return {
            username: 'Rick'
        };
    };
    componentDidMount() {
        this.setState({
            user: this.fetchUser()
        });
    }
    render() {
        return (
            <NavBarComponent user={this.state.user}/>
        );
    }
}
