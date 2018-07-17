import actionTypes from './action-types';

//TODO: поменять на юзер
export default function authFunction(state = '', action) {
    switch (action.type) {
        case actionTypes.login:
            return `${action.username}`;
        case actionTypes.logout:
            return '';
        default:
            return state;
    }

}

