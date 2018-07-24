import actionTypes from './action-types';

let initialState = {
    login: {
        user: undefined,
        isAuthenticated: false,
        error: undefined
    }
};

function authFunction(state = initialState, action) {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    user: action.user,
                    isAuthenticated: true,
                    error: undefined
                }
            };
        case actionTypes.logout:
            return {
                ...state,
                login: {
                    user: undefined,
                    isAuthenticated: false,
                    error: undefined
                }
            };
        case actionTypes.LOGIN_ERROR:
            return {
                ...state,
                login: {
                    user: undefined,
                    isAuthenticated: false,
                    error: action.error
                }
            };
        default:
            return state;
    }

}

export default authFunction;
