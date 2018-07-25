import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './CardComponent.scss';
import {withRouter} from 'react-router-dom';
import {formatDate} from '../../helpers/dateFormat';

class FeedComponent extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        createdAt: PropTypes.string.isRequired,
        user: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        id: PropTypes.number.isRequired
    };

    redirectArticleOverview = () => {
        this.props.history.push(`/article/${this.props.id}`);
    };

    render() {
        return (
            <div className={styles.article} onClick={this.redirectArticleOverview}>
                <h1>{this.props.title}</h1>
                <img src={this.props.imageUrl}/>
                <p>{this.props.content}</p>
                <div className={styles.footerArticle}>
                    <div className={styles.createdAt}>{formatDate(this.props.createdAt)}</div>
                    <div className={styles.username}>@{this.props.user.username}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(FeedComponent);
