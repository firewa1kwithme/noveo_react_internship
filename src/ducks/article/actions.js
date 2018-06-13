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
    }
};
