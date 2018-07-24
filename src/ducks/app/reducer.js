import actionTypes from './action-types';

const initialState = {
    isInit: false
};

function appFunction(state = initialState, action) {
    switch (action.type) {
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
