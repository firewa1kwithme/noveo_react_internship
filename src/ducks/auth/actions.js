import types from './types';

/**
 * @typedef {Object} UserObject
 * @property {string} id
 * @property {string} username
 */

export default {
    /**
     * @param {UserCredentials} credentials
     * @return {Object}
     */
    loginRequest(credentials) {
        return {
            type: types.LOGIN_REQUEST,
            credentials
        };
    },

    /**
     * @param {UserObject} user
     * @return {Object}
     */
    loginSuccess(user) {
        return {
            type: types.LOGIN_SUCCESS,
            user
        };
    },

    /**
     * @param {Object} error
     * @return {Object}
     */
    loginError(error) {
        return {
            type: types.LOGIN_ERROR,
            error
        };
    },

    /**
     * @param {UserCredentials} credentials
     * @return {Object}
     */
    registerRequest(credentials) {
        return {
            type: types.REGISTER_REQUEST,
            credentials
        };
    },

    /**
     * @param {UserObject} user
     * @return {Object}
     */
    registerSuccess(user) {
        return {
            type: types.REGISTER_SUCCESS,
            user
        };
    },

    /**
     * @param {Object} error
     * @return {Object}
     */
    registerError(error) {
        return {
            type: types.REGISTER_ERROR,
            error
        };
    },

    /**
     * @return {Object}
     */
    logout() {
        return {
            type: types.LOGOUT
        };
    },

    /**
     * @return {Object}
     */
    fetchUserRequest() {
        return {
            type: types.FETCH_USER_REQUEST
        };
    },

    /**
     * @param {UserObject} user
     * @return {Object}
     */
    fetchUserSuccess(user) {
        return {
            type: types.FETCH_USER_SUCCESS,
            user
        };
    },

    /**
     * @param {Object} error
     * @return {Object}
     */
    fetchUserError(error) {
        return {
            type: types.FETCH_USER_ERROR,
            error
        };
    }
};
