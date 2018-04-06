import {
    authRequest,
    authSuccess,
    authError
} from '../../actions/Auth/AuthActions.js';
import {handleAction, handleActions} from 'redux-actions';

// export const AuthLogin = handleAction(
//     loginEnter,
//     (state, action) => action.payload,
//     ""
// );

// export const AuthPassword = handleAction(
//     passwordEnter,
//     (state, action) => action.payload,
//     ""
// );
//
export const Auth = handleAction(
    authSuccess,
    (state, action) => action.payload,
    false
);

export const AuthError = handleAction(
    authError,
    (state, action) => true,
    null
);



