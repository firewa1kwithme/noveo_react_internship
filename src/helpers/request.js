import axios from 'axios';
import humps from 'humps';
import {BASE_URL, AUTH_TOKEN_KEY, TOKEN_ENDPOINTS} from 'config.js';

const request = axios.create({
    baseURL: BASE_URL
});

/**
 * Request interceptor for format data
 */
request.interceptors.request.use(requestMapper);

/**
 * Request interceptor for setting JWT to request header
 */
request.interceptors.request.use(setJWTHeader);

/**
 * Response interceptor for setting JWT to LocalStorage
 */
request.interceptors.response.use(setJWTLocalStorage);

/**
 * Response interceptors for send and check response
 */
request.interceptors.response.use(responseMapper, errorHandler);

/**
 * Separates camelCased object keys with an underscore
 *
 * @param {AxiosRequestConfig} config - server's request
 * @return {AxiosRequestConfig}
 */
function requestMapper(config) {
    if (config.data && !(config.data instanceof FormData)) {
        const decamelizedData = humps.decamelizeKeys(config.data);
        delete config.data;
        config.data = decamelizedData;
    }

    return config;
}

/**
 * Converts object keys to camelCase
 *
 * @param {AxiosResponse} response - server's response
 * @return {Promise.<Object>}
 */
function responseMapper(response) {
    return Promise.resolve(humps.camelizeKeys(response.data.data));
}

/**
 * Set jwt token in the authorization header under the 'Authorization' key
 *
 * @param {AxiosRequestConfig} config
 * @return {AxiosRequestConfig}
 */
function setJWTHeader(config) {
    config.headers.common['Authorization'] = window.localStorage.getItem(AUTH_TOKEN_KEY);

    return config;
}

/**
 * Save JWT to the LocalStorage
 *
 * @param {AxiosResponse} response
 * @return {AxiosResponse}
 */
function setJWTLocalStorage(response) {
    switch (true) {
        case new RegExp(`/${TOKEN_ENDPOINTS.REGISTER}$`).test(response.config.url):
        case new RegExp(`/${TOKEN_ENDPOINTS.LOGIN}$`).test(response.config.url):
            const token = response.data.data.token;

            if (token) {
                window.localStorage.setItem(AUTH_TOKEN_KEY, token);
            }

            return response;
        default:
            return response;
    }
}

/**
 * Check response for errors
 * This handler is specific for project
 *
 * @param {AxiosResponse} data - server's response
 * @return {Promise.<Object>}
 */
function errorHandler(data) {
    const {response} = data;
    const newError = {};

    newError.statusCode = response.status;
    newError.statusMessage = response.statusText;
    newError.errorCode = parseJSON(response.data && response.data.errors[0]);

    return Promise.reject(newError);
}

/**
 * Parse json if needed
 *
 * @param {*} data
 * @return {Object|*}
 */
function parseJSON(data) {
    try {
        return JSON.parse(data);
    } catch (e) {
        return data;
    }
}

export default request;
