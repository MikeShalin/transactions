import {
    transactionSuccess,
    transactionError,
    transactionRequest
} from '../../actions/Transaction/TransactionActions';
import {handleAction, handleActions} from 'redux-actions';

export const Transactions = handleAction(
    transactionSuccess,
    (state, action) => action.payload,
    []
);


export const isGetting = handleActions(
    {
        [transactionRequest]: () => true,
        [transactionSuccess]: () => false,
    },
    false
);


export const TransactionError = handleAction(
    transactionError,
    (state, action) => action.payload,
    false
);









