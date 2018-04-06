import {createActions} from 'redux-actions';

export const {
    authRequest: authRequest,
    authSuccess: authSuccess,
    authError: authError,
} = createActions({
    AUTH_REQUEST: logIn => logIn,
    AUTH_SUCCESS: bool => bool,
    AUTH_ERROR: bool => bool,
});