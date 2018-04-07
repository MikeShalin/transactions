import {
    bankRequest,
    bankSuccess,
    bankFailure,
    bankNameRequest,
    bankNameSuccess,
    bankNameFailure
} from '../../actions/Table/TableActions';
import {handleAction, handleActions} from 'redux-actions';

export const Banks = handleAction(
    bankSuccess,
    (state, action) => action.payload,
    false
);

export const BanksName = handleAction(
    bankNameSuccess,
    (state, action) => action.payload,
    false
);


export const isGeting = handleActions(
    {
        [bankRequest]: () => true,
        [bankSuccess]: () => false,
        [bankFailure]: () => false
    },
    false
);





