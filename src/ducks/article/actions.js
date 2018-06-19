import types from './types';

export default {
    /**
     * @return {Object}
     */
    fetchArticlesRequest() {
        return {
            type: types.FETCH_ARTICLES_REQUEST
        };
    },

    /**
     * @param {Array.<Object>} articles
     * @param {Object} pagination
     * @return {Object}
     */
    fetchArticlesSuccess(articles, pagination) {
        return {
            type: types.FETCH_ARTICLES_SUCCESS,
            articles,
            pagination
        };
    },

    /**
     * @param {Object} error
     * @return {Object}
     */
    fetchArticlesError(error) {
        return {
            type: types.FETCH_ARTICLES_ERROR,
            error
        };
    },

    /**
     * @return {Object}
     */
    fetchSingleArticleRequest() {
        return {
            type: types.FETCH_SINGLE_ARTICLE_REQUEST
        };
    },

    /**
     * @param {Object} article
     * @return {Object}
     */
    fetchSingleArticleSuccess(article) {
        return {
            type: types.FETCH_SINGLE_ARTICLE_SUCCESS,
            article
        };
    },

    /**
     * @param {Object} error
     * @return {Object}
     */
    fetchSingleArticleError(error) {
        return {
            type: types.FETCH_SINGLE_ARTICLE_ERROR,
            error
        };
    },

    /**
     * @return {Object}
     */
    createArticleRequest() {
        return {
            type: types.CREATE_ARTICLE_REQUEST
        };
    },

    /**
     * @param {Object} article
     * @return {Object}
     */
    createArticleSuccess(article) {
        return {
            type: types.CREATE_ARTICLE_SUCCESS,
            article
        };
    },

    /**
     * @param {Object} error
     * @return {Object}
     */
    createArticleError(error) {
        return {
            type: types.CREATE_ARTICLE_ERROR,
            error
        };
    },

    /**
     * @return {Object}
     */
    flushState() {
        return {
            type: types.FLUSH_STATE
        };
    }
};
