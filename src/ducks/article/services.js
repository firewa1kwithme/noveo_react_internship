import request from 'helpers/request';

/**
 * @typedef {Object} UserCredentials
 * @property {string} username
 * @property {string} password
 */

export default {
    /**
     * @param {number} limit
     * @param {number} offset
     * @return {Promise.<Object>}
     */
    fetchArticles(limit, offset) {
        return request.get(`/articles?limit=${limit}&offset=${offset}`);
    },

    /**
     * @param {number|string} id
     * @return {Promise.<Object>}
     */
    fetchSingleArticle(id) {
        return request.get(`/articles/${id}`);
    },

    /**
     * @param {Object} payload
     * @return {Promise.<Object>}
     */
    createArticle(payload) {
        return request.post('/articles', payload);
    }
};
