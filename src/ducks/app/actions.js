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
    }
};
