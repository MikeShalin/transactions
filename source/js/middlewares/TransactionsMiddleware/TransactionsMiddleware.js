import {transactionRequest,transactionSuccess,transactionFailure} from '../../actions/Transaction/TransactionActions';

const TransactionsMiddleware = store => next => action => {
    const banks = localStorage.getItem('banks');
    if (action.type === transactionRequest.toString()){
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", '/', true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200)
                    store.dispatch(transactionSuccess(JSON.parse(banks)));
            }
        }

    }
    return next(action);
};

export default TransactionsMiddleware;