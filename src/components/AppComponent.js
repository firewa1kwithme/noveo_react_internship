import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import NavBarComponent from './navbar/NavBarComponent.js';
import ArticleOverviewComponent from './articleoverview/ArticleOverviewComponent.js';

export default class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    static propTypes = {
        fetchUser: PropTypes.func.isRequired
    };
    updatedUserByFetch = () => {
        this.setState({
            user:  this.props.fetchUser()
        });
    };
    componentDidMount() {
        this.updatedUserByFetch();
    }
    render() {
        return (
            <Fragment>
                <NavBarComponent
                    username = {this.state.user.username}
                />
                <ArticleOverviewComponent
                    title = 'qwe'
                    content = 'qweqweqweqqweqweqweqqweqweqweq'
                    username = {this.state.user.username} //props?
                    createdAt = '12.12.1212'
                    imageUrl = 'https://www.thehappycatsite.com/wp-content/uploads/2017/10/best-treats-for-kittens.jpg'
                />
            </Fragment>
        );
    }
}
