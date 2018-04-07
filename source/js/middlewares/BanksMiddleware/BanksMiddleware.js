import {
    bankRequest,
    bankSuccess,
    bankFailure,
} from '../../actions/Table/TableActions';

import {authorization} from '../../components/Auth/authApi';

const BanksMiddleware = store => next => action => {
    const banks = localStorage.getItem('banks');
    if (action.type === bankRequest.toString()){
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", '/', true);
        xhttp.send();
        console.log(xhttp.status);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200)
                    store.dispatch(bankSuccess(JSON.parse(banks)));
            }
        }

    }
    return next(action);
};

export default BanksMiddleware;