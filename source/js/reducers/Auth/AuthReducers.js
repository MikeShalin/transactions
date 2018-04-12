import {
    authSuccess,
    authError
} from 'js/actions/Auth/AuthActions.js';
import {handleAction} from 'redux-actions';

export const Auth = handleAction(
    authSuccess,
    (state, action) => action.payload,
    false
);

export const AuthError = handleAction(
    authError,
    (state, action) => action.payload,
    null
);



