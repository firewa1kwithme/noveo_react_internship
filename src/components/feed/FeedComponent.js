import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardComponent from '../card/CardComponent';

export default class FeedComponent extends Component {
    static propTypes = {
        articles: PropTypes.array
    };
    render() {
        return (
            <div>
                {
                    this.props.articles.map(item => (
                        <CardComponent {...item} key={item}/>)
                    )
                }
                cho
            </div>
        );
    }
}

