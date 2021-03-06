import {createStore, applyMiddleware, compose} from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducers from "./reducers/insuranceReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, {}, composeEnhancers(applyMiddleware(
    thunkMiddleware,
    promiseMiddleware()
)));