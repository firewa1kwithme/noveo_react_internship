import actionTypes from './action-types';

//TODO: поменять на юзер
function authFunction(state = '', action, error) {
    switch (action.type) {
        case actionTypes.loginSuccess:
            return `${action.username}`;
        case actionTypes.logout:
            return '';
        case actionTypes.loginError:
            return error;
        default:
            return state;
    }

}

export default authFunction;
