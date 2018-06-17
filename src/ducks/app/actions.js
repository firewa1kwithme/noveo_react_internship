import types from './types';

export default {
    /**
     * @return {Object}
     */
    initApp() {
        return {
            type: types.INIT_APP
        };
    },

    /**
     * @param {UserCredentials} credentials
     * @return {Object}
     */
    registerUser(credentials) {
        return {
            type: types.REGISTER_USER,
            credentials
        };
    },

    /**
     * @param {UserCredentials} credentials
     * @return {Object}
     */
    loginUser(credentials) {
        return {
            type: types.LOGIN_USER,
            credentials
        };
    },

    /**
     * @return {Object}
     */
    logoutUser() {
        return {
            type: types.LOGOUT_USER
        };
    },

    /**
     * @param {number} limit
     * @param {number} offset
     * @return {Object}
     */
    fetchArticles(limit, offset) {
        return {
            type: types.FETCH_ARTICLES,
            limit,
            offset
        };
    },

    /**
     * @param {number|string} id
     * @return {Object}
     */
    fetchArticle(id) {
        return {
            type: types.FETCH_ARTICLE,
            id
        };
    },

    /**
     * @param {Object} payload
     * @returns {Object}
     */
    createNewArticle(payload) {
        return {
            type: types.CREATE_NEW_ARTICLE,
            payload
        };
    }
};
