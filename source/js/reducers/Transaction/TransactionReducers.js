import {
  transactionSuccess,
  transactionRequest,
  transactionDelete,
  transactionAdd
} from "js/actions/Transaction/TransactionActions";
import { handleActions } from "redux-actions";

export const Transactions = (state = [], action) => {
  switch (action.type) {
    case transactionSuccess.toString():
      return action.payload;
    case transactionDelete.toString():
      const transactions = state.filter(
        transaction => transaction.id !== action.payload
      );
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    case transactionAdd.toString():
      const { amount, bankId } = action.payload,
        newTransaction = {
          id:
            state.length !== 0
              ? Math.max.apply(null, state.map(transaction => transaction.id)) +
                1
              : 1,
          amount,
          bankId
        },
        newState = [...state, newTransaction];
      localStorage.setItem("transactions", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export const isGetting = handleActions(
  {
    [transactionRequest]: () => true,
    [transactionSuccess]: () => false
  },
  false
);
