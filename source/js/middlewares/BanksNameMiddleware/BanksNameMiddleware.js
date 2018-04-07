import {
    bankNameRequest,
    bankNameSuccess,
    bankNameFailure
} from '../../actions/Bank/BankActions';


const BanksNameMiddleware = store => next => action => {
    const banksName = localStorage.getItem('banksName');
    if (action.type === bankNameRequest.toString()){
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", '/', true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200)
                    store.dispatch(bankNameSuccess(JSON.parse(banksName)));
            }
        }

    }
    return next(action);
};

export default BanksNameMiddleware;