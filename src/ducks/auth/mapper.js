/**
 * @param {Object} response
 * @returns {Object}
 */
export function fetchUserResponseMapper(response) {
    return {
        id: response.data.user.id,
        username: response.data.user.username
    };
}
