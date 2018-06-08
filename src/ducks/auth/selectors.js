export default {
    selectError(state) {
        return state.auth.error && state.auth.error.errorCode;
    },

    selectAuthState(state) {
        return state.auth.isAuthenticated;
    },

    selectInitialisedState(state) {
        return state.auth.isInitialised;
    },

    selectUser(state) {
        return state.auth.user;
    }
};
