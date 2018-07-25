import actionTypes from './action-types';

let initialState = {
    login: {
        user: {},
        isAuthenticated: false,
        error: null
    }
};

function authFunction(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                login: {
                    user: action.user,
                    isAuthenticated: true,
                    error: null
                }
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                ...initialState
            };
        case actionTypes.LOGIN_ERROR:
        case actionTypes.FETCH_USER_ERROR:
        case actionTypes.REGISTER_ERROR:
            return {
                ...state,
                login: {
                    user: null,
                    isAuthenticated: false,
                    error: action.error
                }
            };
        default:
            return state;
    }
}

export default authFunction;
