import actionTypes from './action-types';

let initialState = {
    isInit: false
};

function appFunction(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGOUT:
            return {
                ...state,
                isInit: false
            };
        case actionTypes.INIT:
            return {
                ...state,
                isInit: true
            };
        default:
            return state;
    }

}

export default appFunction;
