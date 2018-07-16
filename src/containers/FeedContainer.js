import React, {Component} from 'react';
import FeedComponent from '../components/feed/FeedComponent';

function fetchArticles () {
    return [
        {
            'id': 1,
            'userId': 1,
            'title': 'Пилотный выпуск',
            'content': 'Всем привет! Я КостоПрав и сегодня я хочу сделать обзор лимонных косточек. ',
            'imageUrl': 'http://tv-igra.com.ua/user.img/%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BA%D0%B0.jpg',
            'createdAt': '02.06.2015',
            'user': {
                'id': 1,
                'username': 'kostoPrav'
            }

        },
        {
            'id': 2,
            'userId': 2,
            'title': 'Обзор №2',
            'content': 'Что же! Прошлая статья набрала популярность, поэтому я решил сделать второй выпуск о... вишневых косточках!',
            'imageUrl': '',
            'createdAt': '12.12.1222',
            'user': {
                'id': 2,
                'username': 'sefewfg'
            }

        },
        {
            'id': 3,
            'userId': 2,
            'title': 'Обзор №3',
            'content': 'Я хотел сделать обзор арбузных косточек, но их мы рассматривать не будем, так как арбуз - ягода',
            'imageUrl': '',
            'createdAt': '12.12.1222',
            'user': {
                'id': 2,
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
