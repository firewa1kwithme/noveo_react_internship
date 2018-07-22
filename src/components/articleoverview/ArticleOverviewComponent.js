import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleOverviewComponent.scss';

//TODO: сократить
export default class ArticleOverviewComponent extends Component {
    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        username: PropTypes.string,
        createdAt: PropTypes.string,
        imageUrl: PropTypes.string
    };

    render() {
        return (
            <div className={styles.article}>
                <h1>{this.props.title}</h1>
                <div className={styles.usernameDate}>{this.props.user.username}</div>
                <p>{this.props.content}</p>
                <img src={this.props.imageUrl}/>
                <div className={styles.usernameDate}>{this.props.createdAt}</div>
            </div>
        );
    }
}

