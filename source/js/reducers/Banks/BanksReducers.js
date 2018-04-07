import {
    bankRequest,
    bankSuccess,
    bankFailure,
    bankNameSuccess,
    bankError
} from '../../actions/Bank/BankActions';
import {handleAction, handleActions} from 'redux-actions';

export const Banks = handleAction(
    bankSuccess,
    (state, action) => action.payload,
    false
);

export const BanksName = handleAction(
    bankNameSuccess,
    (state, action) => action.payload,
    false
);

export const isGetting = handleActions(
    {
        [bankRequest]: () => true,
        [bankSuccess]: () => false,
        [bankFailure]: () => false
    },
    false
);

export const BankError = handleAction(
    bankError,
    (state, action) => action.payload,
    false
);





