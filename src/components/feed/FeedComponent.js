import React, {Component} from 'react';

export default class FeedComponent extends Component {

    render() {
        props.articles.map(item => {
            return (
                <CardComponent {...item} key={item.id}/>)
        }
    }

}
