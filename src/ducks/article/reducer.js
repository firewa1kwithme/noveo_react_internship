import actionTypes from './action-types';

const initialState = {
    articles: []
};

function articlesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ALL_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.articles
            };
        case actionTypes.NEW_ARTICLE_ERROR:
        case actionTypes.ALL_ARTICLES_ERROR:
            return action.error;
        default:
            return state;
    }

}

export default articlesReducer;
