import React, {Component} from 'react';
import FeedComponent from '../components/feed/FeedComponent';

function fetchArticles () {
    return [
        {
            'id': 11,
            'userId': 1,
            'title': 'qwer',
            'content': 'qweqeqweqeqwe',
            'imageUrl': '',
            'createdAt': '12.12.1222',
            'user': {
                'id': 1,
                'username': 'sefewfg'
            }

        },
        {
            'id': 12,
            'userId': 1,
            'title': 'qwer',
            'content': 'afawrcawraw',
            'imageUrl': '',
            'createdAt': '12.12.1222',
            'user': {
                'id': 1,
                'username': 'sefewfg'
            }

        }];
}

export default class FeedContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }
    componentDidMount() {
        this.setState({
            articles: fetchArticles()
        });
    }
    render() {
        return (
            <FeedComponent articles={this.state.articles}/>
        );
    }

}
