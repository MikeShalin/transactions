import {combineReducers} from 'redux';
import {Auth,AuthError} from './Auth/AuthReducers.js';
// import TrainingText from './TrainingText/';
// import ErrorChar from './ErrorChar/';
// import {Timer,Stopwatch,ErrorsCount,CharCount} from './TrainingFieldsReducers/TrainingFieldsReducers.js';

export default combineReducers({
    Auth,
    AuthError
});
