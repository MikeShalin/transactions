import {createActions} from 'redux-actions';

export const {
    transactionRequest:transactionRequest,
    transactionSuccess:transactionSuccess,
    transactionDelete:transactionDelete,
    transactionAdd:transactionAdd,
    transactionError:transactionError,
} = createActions({
    TRANSACTION_REQUEST:undefined,
    TRANSACTION_SUCCESS:Transactions=>Transactions,
    TRANSACTION_DELETE:id=>id,
    TRANSACTION_ADD:transaction=>transaction,
    TRANSACTION_ERROR:bool=>bool,
});