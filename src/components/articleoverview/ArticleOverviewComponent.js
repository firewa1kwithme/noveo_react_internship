import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleOverviewComponent.scss';

//TODO: сократить
export default class ArticleOverviewComponent extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        username: PropTypes.string,
        createdAt: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired
    };
    render() {
        return (
            <div className={styles.article}>
                <h1>{this.props.title}</h1>
                <div className={styles.usernameDate}>{this.props.username}</div>
                <img src={this.props.imageUrl}/>
                <div>{this.props.content}</div>
                <div className={styles.usernameDate}>{this.props.createdAt}</div>
            </div>
        );
    }
}


