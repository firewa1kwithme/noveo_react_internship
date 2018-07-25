import actionTypes from './action-types';

const initialState = {
    articles: [],
    currentArticle: {}
};

function articlesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_SINGLE_ARTICLE_SUCCESS:
            return {
                ...state,
                currentArticle: action.article
            };
        case actionTypes.ALL_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.articles
            };
        case actionTypes.NEW_ARTICLE_ERROR:
        case actionTypes.ALL_ARTICLES_ERROR:
        case actionTypes.FETCH_SINGLE_ARTICLE_ERROR:
            return action.error;
        default:
            return state;
    }

}

export default articlesReducer;
