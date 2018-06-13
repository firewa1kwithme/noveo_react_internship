import request from 'helpers/request';

/**
 * @typedef {Object} UserCredentials
 * @property {string} username
 * @property {string} password
 */

export default {
    /**
     * @param {UserCredentials} credentials
     * @return {Promise.<Object>}
     */
    login(credentials) {
        return request.post('/login', credentials);
    },

    /**
     * @param {UserCredentials} credentials
     * @return {Promise.<Object>}
     */
    register(credentials) {
        return request.post('/register', credentials);
    },

    fetchUser() {
        return request.get('/user');
    }
};
