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
                        articlesIds: [...result.articlesIds, item.id],
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

        case types.FETCH_ARTICLES_ERROR:
            return {
                ...state,
                error: action.error
            };

        default:
            return state;
    }
}
