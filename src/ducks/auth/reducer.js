import actionTypes from './action-types';

// const initialState = {
// TODO: тут написать из чего состоит изаутентификэйтед, эррор, объект ЮЗЕРА
// };

function authFunction(state = '', action) {
    switch (action.type) {
        case actionTypes.registerSuccess:
        case actionTypes.loginSuccess:
            return `${action.username}`;
        case actionTypes.logout:
            return '';
        case actionTypes.loginError:
            return action.error;
        default:
            return state;
    }

}

export default authFunction;
