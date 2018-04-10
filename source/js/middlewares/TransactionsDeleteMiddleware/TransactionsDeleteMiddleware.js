import {
    transactionSuccess,
    transactionDelete
} from 'js/actions/Transaction/TransactionActions';

const TransactionsDeleteMiddleware=store=>next=>action=>{
    if (action.type===transactionDelete.toString()){
        let banks=store.getState().Transactions;
        banks=banks.filter(bank=>(bank.id!==action.payload));
        store.dispatch(transactionSuccess(banks));
        localStorage.setItem('banks', JSON.stringify(banks));
    }
    return next(action);
};

export default TransactionsDeleteMiddleware;