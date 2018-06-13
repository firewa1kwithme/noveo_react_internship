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
    fethArticles(limit, offset) {
        return request.get(`/articles?limit=${limit}&offset=${offset}`);
    }
};
