import React, {Component} from 'react';
import ArticleOverviewComponent from '../components/articleoverview/ArticleOverviewComponent'

//TODO: сократить
export default class ArticleOverviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {}
        };
    }

    fetchArticle = () => {
        return {
            title: 'Title',
            username: 'Username',
            imageURL: '',
            content: 'Content',
            createdAt: '12.12.2121'
        };
    };
    componentDidMount() {
        this.setState({
            article: this.fetchArticle()
        });
    }
    render() {
        return (
            <ArticleOverviewComponent {...this.state.article}/>
        );
    }
}


