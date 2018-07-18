import actionTypes from './action-types';

//TODO: добавить из аутентификатед
//TODO: поменять на юзер
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
            type: actionTypes.logout
        };
    },
    registerRequest() {
        return {
            type: actionTypes.registerRequest
        };
    },
    registerSuccess() {
        return {
            type: actionTypes.registerSuccess
        };
    },
    registerError() {
        return {
            type: actionTypes.registerError
        };
    }
};

