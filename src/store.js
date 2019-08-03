import {createStore, applyMiddleware} from 'redux';
import {weather} from './reducers/weatherFunction';
import {logger} from 'redux-logger'
export const create_redux_store=()=>createStore(weather,applyMiddleware(logger));