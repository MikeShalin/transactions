import {
  transactionRequest,
  transactionSuccess
} from "js/actions/Transaction/TransactionActions";

const TransactionsMiddleware = store => next => action => {
  if (action.type === transactionRequest.toString()) {
    const transactions = [
      { id: 1, amount: 100, bankId: 1 },
      { id: 2, amount: 200, bankId: 2 },
      { id: 3, amount: 300, bankId: 3 }
    ];
    if (!localStorage.getItem("transactions"))
      localStorage.setItem("transactions", JSON.stringify(transactions));
    fetch("/").then(response => {
      if (response.ok) {
        store.dispatch(
          transactionSuccess(JSON.parse(localStorage.getItem("transactions")))
        );
      }
    });
  }
  return next(action);
};

export default TransactionsMiddleware;
