import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleOverviewComponent.scss';

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
                <p className={styles.cardArticleContent}>{this.props.content}</p>
                <img src={this.props.imageUrl}/>
                <div className={styles.footerArticle}>
                    <div className={styles.createdAt}>{this.props.createdAt}</div>
                    <div className={styles.username}>@{this.props.user.username}</div>
                </div>
            </div>
        );
    }
}

