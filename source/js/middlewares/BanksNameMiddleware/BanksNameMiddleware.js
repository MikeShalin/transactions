import {
    bankNameRequest,
    bankNameSuccess,
    bankNameFailure
} from 'js/actions/Bank/BankActions';

const BanksNameMiddleware=store=>next=>action=>{
    if (action.type===bankNameRequest.toString()){
        const banksName=[{id:1,name:'Сбербанк'},{id:2,name:'Югра'},{id:3,name:'ГазпромБанка'}];
        if(!localStorage.getItem('banksName'))
            localStorage.setItem('banksName',JSON.stringify(banksName));
        fetch('/')
            .then((response)=>{
                if(response.ok)
                    store.dispatch(bankNameSuccess(JSON.parse(localStorage.getItem('banksName'))));
            })
    }
    return next(action);
};

export default BanksNameMiddleware;