export default {
    /**
     * The most efficient way is to use reselect library
     *
     * @param {Object} state
     * @return {Array.<Object>}
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
     * @return {Object}
     */
    selectPagination(state) {
        return state.article.pagination;
    },

    /**
     * @param {Object} state
     * @return {boolean}
     */
    selectHasMorePagesStatus(state) {
        const pagination = state.article.pagination;

        return (pagination.limit + pagination.offset) < pagination.rowCount;
    },

    /**
     * @param {Object} state
     * @return {boolean}
     */
    selectHasArticlesStatus(state) {
        return !!state.article.articlesIds.length;
    },

    /**
     * @param {Object} state
     * @param {number|string} id
     * @return {Object}
     */
    selectArticle(state, id) {
        return state.article.articlesById[id];
    }
};
