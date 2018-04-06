import {
    authRequest,
    authSuccess,
    authError
} from '../../actions/Auth/AuthActions.js';

import {authorization} from '../../components/Auth/authApi';

const AuthMiddleware = store => next => action => {
    if (action.type === authRequest.toString()){
        console.log('В миддлвере AuthMiddleware',action.payload);
        if(authorization(action.payload)){
            console.log('В миддлвере authorization',authorization(action.payload));
            store.dispatch(authSuccess(true));
            console.log('В миддлвере ',store.getState());
            localStorage.setItem('login', action.payload.login);
            localStorage.setItem('password', action.payload.password);
        } else {
            store.dispatch(authSuccess(false));
            store.dispatch(authError());
            localStorage.removeItem('login');
            localStorage.removeItem('password');
        }
    }
    return next(action);
};

export default AuthMiddleware;