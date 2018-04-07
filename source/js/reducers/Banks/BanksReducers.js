import {bankNameSuccess} from '../../actions/Bank/BankActions';

import {handleAction, handleActions} from 'redux-actions';


export const BanksName = handleAction(
    bankNameSuccess,
    (state, action) => action.payload,
    []
);


