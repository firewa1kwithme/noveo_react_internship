import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardComponent from '../card/CardComponent';
import styles from './FeedComponent.scss';

export default class FeedComponent extends Component {
    static propTypes = {
        articles: PropTypes.array
    };
    render() {
        return (
            <div className={styles.cardFeed}>
                {
                    this.props.articles.map(item => (
                        <CardComponent {...item} key={item.id}/>)
                    )
                }
            </div>
        );
    }
}

