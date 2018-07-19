import actionTypes from './action-types';

export default {

    newArticleAction(article) {
        return {
            type: actionTypes.newArticle,
            article
        };
    },
    newArticleRequest(article) {
        return {
            type: actionTypes.newArticleRequest,
            article
        };
    },
    newArticleSuccess(username) {
        return {
            type: actionTypes.newArticleSuccess,
            username
        };
    },
    newArticleError(error) {
        return {
            type: actionTypes.newArticleError,
            error
        };
    },
    allArticlesAction(articles) {
        return {
            type: actionTypes.allArticles,
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
    },
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
    }
};

