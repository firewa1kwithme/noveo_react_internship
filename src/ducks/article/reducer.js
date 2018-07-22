import actionTypes from './action-types';

const initialState = {
    articlesInfo: {
        allArticles: []
    }
};

function articleReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.newArticleSuccess:
            return {
                ...state,
                articlesInfo: {
                    allArticles: [...state.articlesInfo, action.article]
                }
            };
        case actionTypes.singleArticleSuccess:
        case actionTypes.allArticlesSuccess:
            return {
                ...state,
                articlesInfo: {
                    allArticles: action.articles
                }
            };
        case actionTypes.newArticleError:
        case actionTypes.singleArticleError:
        case actionTypes.allArticlesError:
            return action.error;
        default:
            return state;
    }

}

export default articleReducer;
