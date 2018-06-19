export default {
    /**
     * @param {Object} state
     * @return {boolean}
     */
    selectInitialisedState(state) {
        return state.app.isInitialised;
    }
};
