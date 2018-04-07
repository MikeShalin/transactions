import {createActions} from 'redux-actions';

export const {
    bankNameRequest:bankNameRequest,
    bankNameSuccess:bankNameSuccess,
    bankNameFailure:bankNameFailure,

} = createActions({

    BANK_NAME_REQUEST: undefined,

    BANK_NAME_SUCCESS: banks => banks,

    BANK_NAME_FAILURE: undefined,

});