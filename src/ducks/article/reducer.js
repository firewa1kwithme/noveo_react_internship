import types from './types';

const initialState = {
    articlesIds: [],
    articlesById: {},
    pagination: {},
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.FETCH_ARTICLES_REQUEST:
            return {
                ...state,
                error: null
            };

        case types.FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                ...action.articles.reduce((result, item) => {
                    return {
                        articlesIds: result.articlesIds.includes(item.id)
                            ? result.articlesIds
                            : [...result.articlesIds, item.id],
                        articlesById: {
                            ...result.articlesById,
                            [item.id]: item
                        }
                    };
                }, {
                    articlesIds: state.articlesIds,
                    articlesById: state.articlesById
                }),
                pagination: action.pagination
            };

        case types.FETCH_SINGLE_ARTICLE_SUCCESS:
            return {
                ...state,
                articlesById: {
                    ...state.articlesById,
                    [action.article.id]: action.article
                }
            };

        case types.CREATE_ARTICLE_SUCCESS:
            return {
                ...state,
                articlesById: {
                    ...state.articlesById,
                    [action.article.id]: action.article
                },
                articlesIds: [action.article.id, ...state.articlesIds]
            };

        case types.FETCH_ARTICLES_ERROR:
        case types.FETCH_SINGLE_ARTICLE_ERROR:
        case types.CREATE_ARTICLE_ERROR:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
}
