import types from './types';

export default {
    registerUser(credentials) {
        return {
            type: types.REGISTER_USER,
            credentials
        };
    }
};
