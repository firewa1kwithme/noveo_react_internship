import types from './types';

/**
 * @typedef {Object} UserObject
 * @property {string} id
 * @property {string} username
 */

export default {
    /**
     * @return {Object}
     */
    loginRequest() {
        return {
            type: types.LOGIN_REQUEST
        };
    },

    /**
     * @param {UserObject} user
     * @return {Object}
     */
    loginSuccess(user) {
        return {
            type: types.REGISTER_SUCCESS,
            user: {
                id: user.id,
                username: user.username
            }
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
     *
     * @param {UserObject} user
     * @return {Object}
     */
    registerSuccess(user) {
        return {
            type: types.REGISTER_SUCCESS,
            user: {
                id: user.id,
                username: user.username
            }
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
    }
};
