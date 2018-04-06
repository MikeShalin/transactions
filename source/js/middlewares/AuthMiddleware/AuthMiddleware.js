import {
    authRequest,
    authSuccess,
    authError
} from '../../actions/Auth/AuthActions.js';

import {authorization} from '../../components/Auth/authApi';

const AuthMiddleware = store => next => action => {
    if (action.type === authRequest.toString()){
        const {login,password} = action.payload;
        if (login && password){
            if(authorization(action.payload)){
                store.dispatch(authSuccess(true));
                localStorage.setItem('login', login);
                localStorage.setItem('password', password);
            } else {
                store.dispatch(authSuccess(false));
                store.dispatch(authError(true));
                localStorage.removeItem('login');
                localStorage.removeItem('password');
            }
        } else {
            console.log('логин и пароль в мидлвере отсутствуют',action.payload);
            store.dispatch(authError(false));
            store.dispatch(authSuccess(false));
            localStorage.removeItem('login');
            localStorage.removeItem('password');
        }

    }
    return next(action);
};

export default AuthMiddleware;