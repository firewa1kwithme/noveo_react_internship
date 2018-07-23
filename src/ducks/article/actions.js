import actionTypes from './action-types';

export default {

    newArticleAction(title, content, imageUrl) {
        return {
            type: actionTypes.newArticle,
            title,
            content,
            imageUrl
        };
    },
    newArticleRequest(article) {
        return {
            type: actionTypes.newArticleRequest,
            article
        };
    },
    newArticleSuccess() {
        return {
            type: actionTypes.newArticleSuccess
        };
    },
    newArticleError(error) {
        return {
            type: actionTypes.newArticleError,
            error
        };
    },
    fetchAllArticles(articles) {
        return {
            type: actionTypes.fetchAllArticles,
            articles
        };
    },
    allArticlesRequest(articles) {
        return {
            type: actionTypes.allArticlesRequest,
            articles
        };
    },
    allArticlesSuccess(articles) {
        return {
            type: actionTypes.allArticlesSuccess,
            articles
        };
    },
    allArticlesError(error) {
        return {
            type: actionTypes.allArticlesError,
            error
        };
    }/*,
    singleArticleAction(article) {
        return {
            type: actionTypes.singleArticle,
            article
        };
    },
    singleArticleRequest(article) {
        return {
            type: actionTypes.singleArticleRequest,
            article
        };
    },
    singleArticleSuccess(article) {
        return {
            type: actionTypes.singleArticleSuccess,
            article
        };
    },
    singleArticleError(error) {
        return {
            type: actionTypes.singleArticleError,
            error
        };
    }*/
};

