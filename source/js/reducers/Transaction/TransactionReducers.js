import {
    transactionSuccess,
    transactionError,
    transactionRequest,
    transactionDelete
} from 'js/actions/Transaction/TransactionActions';
import {handleAction, handleActions} from 'redux-actions';

export const Transactions = (
    state = [],
    action
) => {
    switch (action.type) {
        case transactionSuccess.toString():
            return action.payload;
        case transactionDelete.toString():
            const transactions=state.filter(transaction=>(transaction.id!==action.payload));
            localStorage.setItem('banks', JSON.stringify(transactions));
            return transactions;
        default:
            return state;
    }
};

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









