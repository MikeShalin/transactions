import {
    bankSuccess,
    addBankTransactions,
    bankError
} from '../../actions/Bank/BankActions';

const BanksAddMiddleware = store => next => action => {
    if (action.type === addBankTransactions.toString()){
        let banks = store.getState().Banks;
        const amount = Number(action.payload.amount);
        if(!Number.isNaN(amount)){
            console.log('yes');
            const newBank = {
                id: Math.max.apply(null, banks.map(bank => (bank.id)))+1,
                amount: amount,
                bankId: Number(action.payload.bank)
            };
            store.dispatch(bankSuccess([...banks,newBank]));
            localStorage.setItem('banks', JSON.stringify([...banks,newBank]));
            store.dispatch(bankError(false));
        } else {
            console.log('no');
            store.dispatch(bankError(true));
        }
    }
    return next(action);
};

export default BanksAddMiddleware;