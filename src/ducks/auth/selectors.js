export function selectUsername(state) {
    if (state !== undefined) {
        return state;
    } else {
        return '';
    }
}

export function selectLoginInfo(state) {
    if (state !== undefined) {
        return state.auth.login;
    } else {
        return {};
    }
}

export function selectArticle(state) {
    return [
        state.title,
        state.content,
        state.imageUrl,
        state.createdAt
    ];
}
