import actionTypes from './action-types';

const initialState = {
    articles: []
};

function articlesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.allArticlesSuccess:
            return {
                ...state,
                articles: action.articles
            };
        case actionTypes.newArticleError:
        case actionTypes.allArticlesError:
            return action.error;
        default:
            return state;
    }

}

export default articlesReducer;
