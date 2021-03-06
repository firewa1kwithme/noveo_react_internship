import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleOverviewComponent.scss';
import {formatDate} from '../../helpers/dateFormat';

export default class ArticleOverviewComponent extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired
    };
    render() {
        return (
            <div className={styles.article}>
                <h1>{this.props.article.title}</h1>
                <p>{this.props.article.content}</p>
                <img src={this.props.article.imageUrl}/>
                <div className={styles.footerArticle}>
                    <div className={styles.createdAt}>{formatDate(this.props.article.createdAt)}</div>
                    <div className={styles.username}>@{this.props.user.username}</div>
                </div>
            </div>
        );
    }
}

