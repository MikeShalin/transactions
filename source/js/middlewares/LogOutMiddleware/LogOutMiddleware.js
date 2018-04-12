import {logOut,authSuccess,authError} from 'js/actions/Auth/AuthActions.js';

const LogOutMiddleware=store=>next=>action=>{
    if (action.type===logOut.toString()){
        store.dispatch(authSuccess(false));
        store.dispatch(authError(false));
        localStorage.removeItem('login');
        localStorage.removeItem('password');
    }
    return next(action);
};

export default LogOutMiddleware;