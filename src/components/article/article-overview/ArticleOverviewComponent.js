import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './ArticleOverviewComponent.scss';

function ArticleOverviewComponent(props) {
    return (
        <div className={styles.article}>
            <h1>{props.title}</h1>
            <hr/>
            <h5 className={styles.subTitle}>{moment(props.createdAt).format('DD/MM/YYYY')}</h5>
            <img
                width='100%'
                src={props.imageUrl}
                alt='Card image cap'
            />
            <p dangerouslySetInnerHTML={{__html: props.content}}/>
        </div>
    );
}

ArticleOverviewComponent.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    imageUrl: PropTypes.string,
    content: PropTypes.string
};

export default ArticleOverviewComponent;
