import React from 'react';
import PropTypes from 'prop-types';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardSubtitle from 'reactstrap/lib/CardSubtitle';
import CardText from 'reactstrap/lib/CardText';
import CardLink from 'reactstrap/lib/CardLink';
import Link from 'react-router-dom/Link';
import moment from 'moment';
import styles from './CardComponent.scss';
import {Routes} from 'constants.js';
import locale from 'locale.js';

function CardComponent(props) {
    return (
        <div className={styles.cardWrapper}>
            <Card className={styles.cardInner}>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{`${props.user.username}, ${moment(props.createdAt).fromNow()}`}</CardSubtitle>
                </CardBody>
                <img
                    width='100%'
                    src={props.imageUrl}
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
                <CardBody>
                    <CardText>
                        {props.content.substring(0, CardComponent.MAX_CONTENT_LENGTH)}{locale.CARD.ELLIPSES}
                    </CardText>
                    <CardLink tag={Link} to={Routes.ARTICLE.replace(/:id/, props.id)}>
                        {locale.CARD.SHOW_ARTICLE_BUTTON}
                    </CardLink>
                </CardBody>
            </Card>
        </div>
    );
}

CardComponent.MAX_CONTENT_LENGTH = 250;

CardComponent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    user: PropTypes.shape({
        username: PropTypes.string.isRequired
    }).isRequired,
    imageUrl: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default CardComponent;
