import {transactionSuccess,transactionAdd,transactionError} from '../../actions/Transaction/TransactionActions';

const TransactionAddMiddleware = store => next => action => {
    if (action.type === transactionAdd.toString()){
        let transactions = store.getState().Transactions;
        const amount = Number(action.payload.amount);
        if(!Number.isNaN(amount)){
            const newTransaction = {
                id: transactions.length !== 0?Math.max.apply(null, transactions.map(transaction => (transaction.id)))+1:1,
                amount: amount,
                bankId: Number(action.payload.bank)
            };
            store.dispatch(transactionSuccess([...transactions,newTransaction]));
            localStorage.setItem('transactions', JSON.stringify([...transactions,newTransaction]));
            store.dispatch(transactionError(false));
        } else {
            store.dispatch(transactionError(true));
        }
    }
    return next(action);
};

export default TransactionAddMiddleware;