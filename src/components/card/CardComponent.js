import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './CardComponent.scss';

export default class FeedComponent extends Component {
    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        createdAt: PropTypes.string,
        user: PropTypes.object
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.user.username}</div>
                <img src={this.props.imageUrl} className={styles.cardImage}/>
                <div className={styles.cardArticleContent}>{this.props.content}</div>
                <div>{this.props.createdAt}</div>
            </div>
        );
    }
}
