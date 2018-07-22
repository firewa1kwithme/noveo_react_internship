export function selectArticles(state) {
    if (state !== undefined) {
        return state.article.articlesInfo.allArticles;
    } else {
        return {};
    }
}
