import {
    bankSuccess,
    addBankTransactions
} from '../../actions/Bank/BankActions';


const BanksAddMiddleware = store => next => action => {
    if (action.type === addBankTransactions.toString()){
        let banks = store.getState().Banks;
        const newBank = {
                id: Math.max.apply(null, banks.map(bank => (bank.id)))+1,
                amount: Number(action.payload.amount),
                bankId: Number(action.payload.bank)
            };
        store.dispatch(bankSuccess([...banks,newBank]));
        console.log('после диспатча при добавлении',store.getState().Banks);
        localStorage.setItem('banks', JSON.stringify([...banks,newBank]));
    }
    return next(action);
};

export default BanksAddMiddleware;