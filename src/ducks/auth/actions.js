import actionTypes from './action-types';

//TODO: добавить из аутентификатед
//TODO: поменять юзернейм на юзер
export default {

    loginAction(username, password) {
        return {
            type: actionTypes.login,
            username,
            password
        };
    },
    loginRequest(credentials) {
        return {
            type: actionTypes.loginRequest,
            credentials
        };
    },
    loginSuccess(user) {
        return {
            type: actionTypes.loginSuccess,
            user
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
            type: actionTypes.register,
            username,
            password
        };
    },
    registerRequest(credentials) {
        return {
            type: actionTypes.registerRequest,
            credentials
        };
    },
    registerSuccess(user) {
        return {
            type: actionTypes.registerSuccess,
            user
        };
    },
    registerError(error) {
        return {
            type: actionTypes.registerError,
            error
        };
    }
};

