import {createStore, applyMiddleware, compose} from 'redux';
import AuthMiddleware from './middlewares/AuthMiddleware/';
// import traningStringMiddleware from './middlewares/traningStringMiddleware/';
// import keybordMiddleware from './middlewares/keybordMiddleware/';
import rootReducer from './reducers';

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
          AuthMiddleware
      ),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
