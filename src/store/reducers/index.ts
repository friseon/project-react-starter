import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { counterReducer } from './counter';

export const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    counter: counterReducer
});
