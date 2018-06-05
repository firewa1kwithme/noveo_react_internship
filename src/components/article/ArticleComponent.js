import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleComponent.scss';

function ArticleComponent(props) {
    return (
        <div className={styles.article}>
            <h1>{props.title}</h1>
            <hr/>
            <h5 className={styles.subTitle}>{props.author}, {props.creationDate}</h5>
            <img
                width='100%'
                src={props.image}
                alt='Card image cap'
            />
            <p>{props.body}</p>
        </div>
    );
}

/* eslint-disable */
ArticleComponent.defaultProps = {
    'id': 10,
    'title': 'Claustrofobia',
    'creationDate': '3/5/2018',
    'author': 'Roxi',
    'image': 'http://dummyimage.com/483x327.bmp/5fa2dd/ffffff',
    'body': 'eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla'
};
/* eslint-enable */

ArticleComponent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default ArticleComponent;
