export default {
    selectError(state) {
        return state.auth.error && state.auth.error.errorCode;
    },

    selectAuthState(state) {
        return state.auth.isAuthenticated;
    }
};
