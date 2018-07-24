export function selectUser(state) {
    return state.auth.login.user;
}

export function selectLoginInfo(state) {
    return state.auth.login;
}

