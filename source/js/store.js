import { createStore, applyMiddleware, compose } from "redux";
import AuthMiddleware from "js/middlewares/AuthMiddleware/";
import TransactionsMiddleware from "js/middlewares/TransactionsMiddleware/";
import BanksNameMiddleware from "js/middlewares/BanksNameMiddleware/";
import rootReducer from "js/reducers";

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        AuthMiddleware,
        TransactionsMiddleware,
        BanksNameMiddleware
      )
    )
  );
