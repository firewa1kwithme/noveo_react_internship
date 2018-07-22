export function selectArticle(state) {
    if (state !== undefined) {
        return state.article.articlesInfo.allArticles;
    } else {
        return {};
    }
}
