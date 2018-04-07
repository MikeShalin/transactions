import {transactionSuccess,transactionAdd,transactionError} from '../../actions/Transaction/TransactionActions';

const TransactionAddMiddleware = store => next => action => {
    if (action.type === transactionAdd.toString()){
        let banks = store.getState().Transactions;
        const amount = Number(action.payload.amount);
        if(!Number.isNaN(amount)){
            console.log('yes');
            const newBank = {
                id: Math.max.apply(null, banks.map(bank => (bank.id)))+1,
                amount: amount,
                bankId: Number(action.payload.bank)
            };
            store.dispatch(transactionSuccess([...banks,newBank]));
            localStorage.setItem('banks', JSON.stringify([...banks,newBank]));
            store.dispatch(transactionError(false));
        } else {
            console.log('no');
            store.dispatch(transactionError(true));
        }
    }
    return next(action);
};

export default TransactionAddMiddleware;