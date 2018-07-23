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
        case actionTypes.registerSuccess:
        case actionTypes.loginSuccess:
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
        case actionTypes.loginError:
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
