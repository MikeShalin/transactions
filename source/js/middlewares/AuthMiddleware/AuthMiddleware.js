import {
    authRequest,
    authSuccess,
    authError
} from 'js/actions/Auth/AuthActions.js';

import {authorization} from 'js/components/Auth/authApi';
const remove=(store)=>{
    store.dispatch(authSuccess(false));
    store.dispatch(authError(true));
    localStorage.removeItem('login');
    localStorage.removeItem('password');
};
const AuthMiddleware=store=>next=>action=>{
    if (action.type===authRequest.toString()){
        const {login,password}=action.payload;
        if (login && password){
            if(authorization(action.payload)){
                store.dispatch(authSuccess(true));
                localStorage.setItem('login', login);
                localStorage.setItem('password', password);
            } else {
                remove(store);
            }
        } else {
            remove(store);
        }

    }
    return next(action);
};

export default AuthMiddleware;