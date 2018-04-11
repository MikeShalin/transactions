import {
    authRequest,
    authSuccess,
    authError
} from '../../actions/Auth/AuthActions.js';

import {authorization} from '../../components/Auth/authApi';
const remove=(withErr,store)=>{
    store.dispatch(authSuccess(false));
    store.dispatch(authError(withErr));
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
                remove(true,store);
            }
        } else {
            remove(false,store);
        }

    }
    return next(action);
};

export default AuthMiddleware;