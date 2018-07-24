import actionTypes from './action-types';

export default {

    loginRequest(credentials) {
        return {
            type: actionTypes.LOGIN_REQUEST,
            credentials
        };
    },
    loginSuccess(user) {
        return {
            type: actionTypes.LOGIN_SUCCESS,
            user
        };
    },
    loginError(error) {
        return {
            type: actionTypes.LOGIN_ERROR,
            error
        };
    },
    registerRequest(credentials) {
        return {
            type: actionTypes.REGISTER_REQUEST,
            credentials
        };
    },
    registerSuccess(user) {
        return {
            type: actionTypes.REGISTER_SUCCESS,
            user
        };
    },
    registerError(error) {
        return {
            type: actionTypes.REGISTER_ERROR,
            error
        };
    },
    logout() {
        return {
            type: actionTypes.LOGOUT
        };
    },
    fetchUserRequest() {
        return {
            type: actionTypes.FETCH_USER_REQUEST
        };
    },
    fetchUserSuccess(user) {
        return {
            type: actionTypes.FETCH_USER_SUCCESS,
            user
        };
    },
    fetchUserError(error) {
        return {
            type: actionTypes.FETCH_USER_ERROR,
            error
        };
    }
};

