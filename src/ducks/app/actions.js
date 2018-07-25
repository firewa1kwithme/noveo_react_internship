import actionTypes from './action-types';

export default {

    loginAction(username, password) {
        return {
            type: actionTypes.LOGIN,
            username,
            password
        };
    },
    logoutAction() {
        return {
            type: actionTypes.LOGOUT
        };
    },
    registerAction(username, password) {
        return {
            type: actionTypes.REGISTER,
            username,
            password
        };
    },
    newArticleAction(title, content, imageUrl) {
        return {
            type: actionTypes.NEW_ARTICLE,
            title,
            content,
            imageUrl
        };
    },
    fetchAllArticles(articles) {
        return {
            type: actionTypes.FETCH_ALL_ARTICLES,
            articles
        };
    },
    initial() {
        return {
            type: actionTypes.INIT
        };
    },
    fetchArticle(id) {
        return {
            type: actionTypes.FETCH_ARTICLE,
            id
        };
    }
};

