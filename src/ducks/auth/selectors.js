export default {
    /**
     * @param  {Object} state
     * @return {string|null}
     */
    selectError(state) {
        return state.auth.error ? state.auth.error.errorCode : null;
    },

    /**
     * @param {Object} state
     * @return {boolean}
     */
    selectAuthState(state) {
        return state.auth.isAuthenticated;
    },

    /**
     * @param {Object} state
     * @return {UserObject}
     */
    selectUser(state) {
        return state.auth.user;
    }
};
