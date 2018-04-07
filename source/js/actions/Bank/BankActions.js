import {createActions} from 'redux-actions';

export const {
    bankRequest: bankRequest,
    bankSuccess: bankSuccess,
    bankFailure: bankFailure,
    bankNameRequest:bankNameRequest,
    bankNameSuccess:bankNameSuccess,
    bankNameFailure:bankNameFailure,
    bankDelete:bankDelete,
    addBankTransactions:addBankTransactions

} = createActions({
    BANK_REQUEST: undefined,

    BANK_SUCCESS: banks => banks,

    BANK_FAILURE: undefined,

    BANK_NAME_REQUEST: undefined,

    BANK_NAME_SUCCESS: banks => banks,

    BANK_NAME_FAILURE: undefined,

    BANK_DELETE: id => id,

    ADD_BANK_TRANSACTIONS: transactions=>transactions

});