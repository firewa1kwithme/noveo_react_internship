import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './CardComponent.scss';
import {withRouter} from 'react-router-dom';

class FeedComponent extends Component {
    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        createdAt: PropTypes.string,
        user: PropTypes.object
    };

    redirectArticleOverview = () => {
        this.props.history.push(`/article/${this.props.id}`);
    };

    render() {
        return (
            <div className={styles.article}>
                <h1>{this.props.title}</h1>
                <div>{this.props.user.username}</div>
                <img src={this.props.imageUrl}/>
                <p className={styles.cardArticleContent}>{this.props.content}</p>
                <div className={styles.createdAt}>{this.props.createdAt}</div>
                <div onClick={this.redirectArticleOverview} className={styles.redirectToArticle}> Нужно всего лишь...
                </div>
            </div>
        );
    }
}

export default withRouter(FeedComponent);
