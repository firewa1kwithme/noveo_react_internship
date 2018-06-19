import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './ArticleOverviewComponent.scss';

function ArticleOverviewComponent(props) {
    return (
        <div className={styles.article}>
            <h1>{props.title}</h1>
            <hr/>
            <h5 className={styles.subTitle}>
                {`${props.user.username}, ${moment(props.createdAt).format('DD/MM/YYYY')}`}
            </h5>
            <img
                src={props.imageUrl}
                onError={(e) => {
                    e.target.style.display = 'none';
                }}
            />
            <p>{props.content}</p>
        </div>
    );
}

ArticleOverviewComponent.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    imageUrl: PropTypes.string,
    content: PropTypes.string,
    user: PropTypes.shape({
        username: PropTypes.string.isRequired
    }).isRequired
};

export default ArticleOverviewComponent;
