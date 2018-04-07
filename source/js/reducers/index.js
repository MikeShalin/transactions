import {combineReducers} from 'redux';
import {Auth,AuthError} from './Auth/AuthReducers.js';
import {Banks,isGetting,BanksName} from './Banks/BanksReducers';

export default combineReducers({
    Auth,
    AuthError,
    Banks,
    isGetting,
    BanksName
});
