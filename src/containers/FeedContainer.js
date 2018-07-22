import React, {Component} from 'react';
import FeedComponent from '../components/feed/FeedComponent';
import {selectLoginInfo} from '../ducks/auth/selectors';
import {selectArticle} from '../ducks/article/selectors';
import {connect} from 'react-redux';
import actions from '../ducks/article/actions';

// function fetchArticles() {
//     return [
//         {
//             'id': 1,
//             'title': 'Пилотный выпуск',
//             'content': 'Всем привет! Я КостоПрав и сегодня я хочу сделать обзор лимонных косточек. Для того, чтобы ' +
//             'добраться до косточки необходимо сперва съесть сам лимон. Мой лимон был кислым и сочным, но кислота была' +
//             ' неприятной. За сложность получения косточки снимаю два балла (подлый лимон так и норовил залить своей ' +
//             'кислотой мои глаза). На вкус косточки с приятным горьким послевкусием. Неплохо. Читал, что можно ' +
//             'попробовать косточки зарыть, а затем получить новые лимоны, так как я еврей, мне очень понравилась эта ' +
//             'затея. Что ж, попробуем! Ставьте классы, и я продолжу радовать вас своими обзорами!',
//             'imageUrl': 'http://tv-igra.com.ua/user.img/%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BE' +
//             '%D1%81%D1%82%D0%BE%D1%87%D0%BA%D0%B0.jpg',
//             'createdAt': '02.06.2015',
//             'user': {
//                 'id': 1,
//                 'username': 'kostoPrav'
//             }
//
//         },
//         {
//             'id': 2,
//             'title': 'Обзор №2',
//             'content': 'Что же! Прошлая статья набрала популярность, поэтому я решил сделать второй выпуск о... вишневых косточках!',
//             'imageUrl': 'https://takprosto.cc/wp-content/uploads/v/vishnevye-kostochki/2.jpg',
//             'createdAt': '03.06.2015',
//             'user': {
//                 'id': 1,
//                 'username': 'kostoPrav'
//             }
//
//         },
//         {
//             'id': 3,
//             'title': 'Обзор №3',
//             'content': 'Я хотел сделать обзор арбузных косточек, но их мы рассматривать не будем, так как арбуз - ягода',
//             'imageUrl': 'https://takprosto.cc/wp-content/uploads/p/polza-arbuznyh-semechek/1.jpg',
//             'createdAt': '42.06.2015',
//             'user': {
//                 'id': 1,
//                 'username': 'kostoPrav'
//             }
//
//         },
//         {
//             'id': 4,
//             'title': 'Обзор №4',
//             'content': 'Здесь будет обзор сердца авокадо',
//             'imageUrl': '',
//             'createdAt': '17.06.2017',
//             'user': {
//                 'id': 1,
//                 'username': 'kostoPrav'
//             }
//
//         }
//     ];
// }

class FeedContainer extends Component {
    componentDidMount() {
        this.props.fetchAllArticles();
    }

    render() {
        return (
            <FeedComponent articles={this.props.allArticles}/>
        );
}

}

export default connect((state) => {
    return {
        allArticles: selectArticle(state)
    };
},
(dispatch) => {
    return {
        fetchAllArticles: () => (dispatch(actions.fetchAllArticles()))
    };
})(FeedContainer);
