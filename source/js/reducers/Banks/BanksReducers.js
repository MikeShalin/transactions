import {bankNameSuccess} from 'js/actions/Bank/BankActions';
import {handleAction} from 'redux-actions';

export const BanksName=handleAction(
    bankNameSuccess,
    (state,action)=>action.payload,
    []
);


