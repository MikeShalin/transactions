import {createStore, applyMiddleware, compose} from 'redux';
import AuthMiddleware from './middlewares/AuthMiddleware/';
import TransactionsMiddleware from './middlewares/TransactionsMiddleware/';
import BanksNameMiddleware from './middlewares/BanksNameMiddleware/';
import TransactionsDeleteMiddleware from './middlewares/TransactionsDeleteMiddleware/';
import TransactionAddMiddleware from './middlewares/TransactionAddMiddleware/';
import rootReducer from './reducers';

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
          AuthMiddleware,
          TransactionsMiddleware,
          BanksNameMiddleware,
          TransactionsDeleteMiddleware,
          TransactionAddMiddleware
      ),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
