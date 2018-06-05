import React from 'react';
import PropTypes from 'prop-types';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardSubtitle from 'reactstrap/lib/CardSubtitle';
import CardText from 'reactstrap/lib/CardText';
import CardLink from 'reactstrap/lib/CardLink';
import Link from 'react-router-dom/Link';
import styles from './CardComponent.scss';

function CardComponent(props) {
    return (
        <div className={styles.cardWrapper}>
            <Card className={styles.cardInner}>
                <CardBody>
                    <CardTitle>{props.title}</CardTitle>
                    <CardSubtitle>{`${props.author}, ${props.creationDate}`}</CardSubtitle>
                </CardBody>
                <img
                    width='100%'
                    src={props.image}
                    alt='Card image cap'
                />
                <CardBody>
                    <CardText>{props.body}</CardText>
                    <CardLink tag={Link} to={`/article/${props.id}`}>Show more</CardLink>
                </CardBody>
            </Card>
        </div>
    );
}

CardComponent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
};

export default CardComponent;
