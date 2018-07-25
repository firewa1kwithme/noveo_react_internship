import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardComponent from '../card/CardComponent';
import styles from './FeedComponent.scss';
import Routes from '../../constants';
import {Link} from 'react-router-dom';
import PlusIcon from 'components/icons/PlusIcon';

export default class FeedComponent extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };
    render() {
        return (
            <div className={styles.cardFeed}>
                {
                    this.props.articles.map(item => (
                        <CardComponent {...item} key={item.id}/>)
                    )
                }
                <Link to={Routes.NEW}>
                    <div className={styles.addButton}>
                        <PlusIcon className={styles.plusSign}/>
                    </div>

                </Link>
            </div>
        );
    }
}

