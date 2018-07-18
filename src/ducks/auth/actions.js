import actionTypes from './action-types';

//TODO: добавить из аутентификатед
//TODO: поменять юзернейм на юзер
export default {

    loginAction(username, password) {
        return {
            type: actionTypes.login,
            username, password
        };
    },
    loginRequest(credentials) {
        return {
            type: actionTypes.loginRequest,
            credentials
        };
    },
    loginSuccess(username) {
        return {
            type: actionTypes.loginSuccess,
            username
        };
    },
    loginError(error) {
        return {
            type: actionTypes.loginError,
            error
        };
    },
    logoutAction() {
        return {
            type: actionTypes.logout,
        };
    },
    registerAction(username, password) {
        return {
            type: actionTypes.registerRequest,
            username, password
        };
    },
    registerRequest(credentials) {
        return {
            type: actionTypes.registerRequest,
            credentials
        };
    },
    registerSuccess(username) {
        return {
            type: actionTypes.registerSuccess,
            username
        };
    },
    registerError(error) {
        return {
            type: actionTypes.registerError,
            error
        };
    }
};

