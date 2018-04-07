import {createStore, applyMiddleware, compose} from 'redux';
import AuthMiddleware from './middlewares/AuthMiddleware/';
import BanksMiddleware from './middlewares/BanksMiddleware/';
import BanksNameMiddleware from './middlewares/BanksNameMiddleware/';
import BanksDeleteMiddleware from './middlewares/BanksDeleteMiddleware/';
import BanksAddMiddleware from './middlewares/BanksAddMiddleware/';
import rootReducer from './reducers';

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
          AuthMiddleware,
          BanksMiddleware,
          BanksNameMiddleware,
          BanksDeleteMiddleware,
          BanksAddMiddleware
      ),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
