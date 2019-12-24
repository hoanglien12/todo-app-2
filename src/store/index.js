import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from './store/rootSaga';

const reduxDevTools =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const sagaMiddleware = createSagaMiddleware()
sagaMiddleware.run(rootSaga)

let store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools));
export default store;
