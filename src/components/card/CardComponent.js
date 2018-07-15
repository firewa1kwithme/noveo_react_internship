import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class FeedComponent extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.user.username}</div>
                <img src={this.props.imageUrl}/>
                <div>{this.props.content}</div>
                <div>{this.props.createdAt}</div>
            </div>
        );
    }
}
