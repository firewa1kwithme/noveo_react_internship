import types from './types';

const initialState = {
    error: null,
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
        case types.REGISTER_REQUEST:
            return {
                ...state,
                error: null
            };

        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
        case types.FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                isAuthenticated: true
            };

        case types.LOGIN_ERROR:
        case types.REGISTER_ERROR:
        case types.FETCH_USER_ERROR:
            return {
                ...state,
                error: action.error
            };

        case types.LOGOUT:
            return {
                ...state,
                user: {},
                isAuthenticated: false
            };

        default:
            return state;
    }
}
