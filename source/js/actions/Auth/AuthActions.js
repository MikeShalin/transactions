import {createActions} from 'redux-actions';

export const {
    authRequest:authRequest,
    authSuccess:authSuccess,
    authError:authError,
    logOut:logOut
} = createActions({
    AUTH_REQUEST:logIn=>logIn,
    AUTH_SUCCESS:bool=>bool,
    AUTH_ERROR:bool=>bool,
    LOG_OUT:undefined
});