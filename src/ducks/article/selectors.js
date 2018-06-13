export default {
    /**
     * The most efficient way is to use reselect library
     *
     * @param {Object} state
     * @returns {Array.<Object>}
     */
    selectArticles(state) {
        const articlesIds = state.article.articlesIds;
        const articlesMap = state.article.articlesById;

        return articlesIds.reduce((result, id) => {
            const article = articlesMap[id];

            return article ? [...result, article] : result;
        }, []);
    },

    /**
     * @param {Object} state
     * @returns {Object}
     */
    selectPagination(state) {
        return state.article.pagination;
    },

    /**
     * @param {Object} state
     * @returns {boolean}
     */
    selectHasMorePagesStatus(state) {
        const pagination = state.article.pagination;

        return pagination.limit + pagination.offset < pagination.rowCount;
    }
};
