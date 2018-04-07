import {
    bankSuccess,
    bankDelete
} from '../../actions/Table/TableActions';


const BanksDeleteMiddleware = store => next => action => {
    if (action.type === bankDelete.toString()){
        let banks = store.getState().Banks;
        banks = banks.filter(bank=>(bank.id!==action.payload));
        store.dispatch(bankSuccess(banks));
        localStorage.setItem('banks', JSON.stringify(banks));
    }
    return next(action);
};

export default BanksDeleteMiddleware;