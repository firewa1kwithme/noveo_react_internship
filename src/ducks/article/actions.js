import actionTypes from './action-types';

export default {

    newArticleRequest(article) {
        return {
            type: actionTypes.NEW_ARTICLE_REQUEST,
            article
        };
    },
    newArticleSuccess() {
        return {
            type: actionTypes.NEW_ARTICLE_SUCCESS
        };
    },
    newArticleError(error) {
        return {
            type: actionTypes.NEW_ARTICLE_ERROR,
            error
        };
    },
    allArticlesRequest(articles) {
        return {
            type: actionTypes.ALL_ARTICLES_REQUEST,
            articles
        };
    },
    allArticlesSuccess(articles) {
        return {
            type: actionTypes.ALL_ARTICLES_SUCCESS,
            articles
        };
    },
    allArticlesError(error) {
        return {
            type: actionTypes.ALL_ARTICLES_ERROR,
            error
        };
    },
    singleArticleRequest() {
        return {
            type: actionTypes.FETCH_SINGLE_ARTICLE_REQUEST
        };
    },
    singleArticleSuccess(article) {
        return {
            type: actionTypes.FETCH_SINGLE_ARTICLE_SUCCESS,
            article
        };
    },
    singleArticleError(error) {
        return {
            type: actionTypes.FETCH_SINGLE_ARTICLE_ERROR,
            error
        };
    }
};

