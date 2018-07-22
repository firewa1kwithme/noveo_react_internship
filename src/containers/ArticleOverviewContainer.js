import React, {Component} from 'react';
import ArticleOverviewComponent from '../components/articleoverview/ArticleOverviewComponent';
import {connect} from 'react-redux';
import {selectArticles} from '../ducks/article/selectors';
import actions from '../ducks/article/actions';

//TODO: сократить
class ArticleOverviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {}
        };
    }

    fetchArticle = () => {
        return {
            title: 'Пилотный выпуск',
            username: 'kostoPrav',
            imageUrl: 'http://tv-igra.com.ua/user.img/%D0%BB%D0%B8%D0%BC%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BA%D0%BE' +
            '%D1%81%D1%82%D0%BE%D1%87%D0%BA%D0%B0.jpg',
            content: 'Всем привет! Я КостоПрав и сегодня я хочу сделать обзор лимонных косточек. Для того, чтобы ' +
            'добраться до косточки необходимо сперва съесть сам лимон. Мой лимон был кислым и сочным, но кислота была' +
            ' неприятной. За сложность получения косточки снимаю два балла (подлый лимон так и норовил залить своей ' +
            'кислотой мои глаза). На вкус косточки с приятным горьким послевкусием. Неплохо. Читал, что можно ' +
            'попробовать косточки зарыть, а затем получить новые лимоны, так как я еврей, мне очень понравилась эта ' +
            'затея. Что ж, попробуем! Ставьте классы, и я продолжу радовать вас своими обзорами!',
            createdAt: '02.06.2015'
        };
    };
    componentDidMount() {
        this.setState({
            article: this.fetchArticle()
        });
    }
    render() {
        let currentArticle = {}
        this.props.allArticles.forEach((article) => {
            if (article.id === parseInt(this.props.match.params.articleId)) {
                currentArticle = article;
            }
        });
        console.log(currentArticle);
        return (
            <ArticleOverviewComponent {...currentArticle}/>
        );
    }
}

export const ConnectedArticleOverviewContainer = connect((state) => {
    return {
        allArticles: selectArticles(state)
    };
})(ArticleOverviewContainer);


